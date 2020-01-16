from sqlalchemy import create_engine
from sqlalchemy import sql
from flask import make_response
from sqlalchemy.ext.declarative import declarative_base
import pymysql
from sqlalchemy.sql import text
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, insert
from sqlalchemy.orm import sessionmaker,Session
from sqlalchemy import MetaData, Table
from flask import request,redirect

engine = create_engine('mysql+pymysql://admin:cs336project@cs336.c56bu3bguitv.us-east-2.rds.amazonaws.com/BarBeerDrinker')


#Returns all the bars in the database
def get_bars():
    with engine.connect() as con:
        search_query = sql.text(
                                    "SELECT name,state,phoneNumber,address,opens,closes,license FROM bars;"
                                )
        rs = con.execute(search_query)
        results= [dict(row) for row in rs]
        for r in results:
            r["phoneNumber"] = str(r["phoneNumber"])
            r["opens"] = str(r["opens"])
            r["closes"] = str(r["closes"])
    return results

#Returns a selected bar
def getBar(name):
    with engine.connect() as con:
        search_query = sql.text(
                                    "SELECT name,state,phoneNumber,address,opens,closes,license FROM bars WHERE name = :name;"
                                )
        rs = con.execute(search_query,name=name)
        result= [dict(row) for row in rs]
        if result is None:
            return None
        for r in result:
            r["phoneNumber"] = str(r["phoneNumber"])
            r["opens"] = str(r["opens"])
            r["closes"] = str(r["closes"])

        return result
#Returns sells from selected bar
def getBarSells(name):
    with engine.connect() as con:
        search_query = sql.text(
                                    "SELECT beer,price FROM sells WHERE bar = :name;"
                                )
        rs = con.execute(search_query,name=name)
        result= [dict(row) for row in rs]
        if result is None:
            return None
        for r in result:
           r["price"] = float(r["price"])

        return result

#DRINKER PAGE
#Get the list of all drinkers
def getDrinkers():
    with engine.connect() as con:
        search_query = sql.text(
                                    "SELECT name,state,phoneNumber,address FROM drinkers;"
                                )

        rs = con.execute(search_query)
        results = [dict(row) for row in rs]

        if results is None:
            return None

        for r in results:
            r["phoneNumber"] = str(r["phoneNumber"])

        return results

#given a drinker name, return all transactions grouped by bar
def getBills(name):
    with engine.connect() as con:
        search_query = sql.text(
                                    "SELECT id,items,price,tip,bar,time,date FROM bills WHERE drinker = :name ORDER BY bar asc, date desc ;"
                                )

        rs = con.execute(search_query,name=name)
        results = [dict(row) for row in rs]

        if results is None:
            return None

        for r in results:
            r["id"] = int(r["id"])
            r["price"] = float(r["price"])
            r["tip"] = float(r["tip"])
            r["time"] = str(r["time"])
            r["date"] = str(r["date"])

        return results

#BAR PAGE
#given a bar name return the largest spenders
def largest_spenders(bar_name):
    with engine.connect() as con:
        search_query = sql.text(
                                    "SELECT b.drinker,sum(b.tip+b.price) as total FROM bills b,bills b1 WHERE b.bar = :bar_name AND b.bar = b1.bar AND b.drinker = b1.drinker AND b.id != b1.id GROUP BY b.drinker ORDER BY total DESC LIMIT 10;"
                                )

        rs = con.execute(search_query,bar_name=bar_name)
        results = [dict(row) for row in rs]

        if results is None:
            return None

        for r in results:
            r["total"] = float(r["total"])

        return results


#given a bar return the most popular beers
def most_popular(bar_name):
    with engine.connect() as con:
        search_query = sql.text(
                                    "SELECT b.beer,sum(b.beercount) as total FROM beersOrdered b WHERE b.bar = :bar_name GROUP BY beer ORDER BY total DESC LIMIT 5;"
                                )

        rs = con.execute(search_query,bar_name=bar_name)
        results = [dict(row) for row in rs]

        if results is None:
            return None

        for r in results:
            r["total"] = float(r["total"])

        return results

#return the manufacturer's who produce the most beer
def produce_most(bar_name):
    with engine.connect() as con:
        search_query = sql.text(
                                    "SELECT sum(beercount) as total,b.manf FROM beersOrdered LEFT JOIN beers b ON b.name = beer WHERE bar = :bar_name GROUP BY b.manf ORDER BY total DESC;"
                                )

        rs = con.execute(search_query,bar_name=bar_name)
        results = [dict(row) for row in rs]

        if results is None:
            return None

        for r in results:
            r["total"] = float(r["total"])

        return results

#BEER PAGE
#Get all beers
def get_beers():
    with engine.connect() as con:
        search_query = sql.text(
                                    "SELECT name,manf FROM beers;"
                                )
        rs = con.execute(search_query)
        results= [dict(row) for row in rs]
    return results

#Get time spending
def getTimeSpending(name):
    with engine.connect() as con:
        search_query = sql.text(
                                    "select extract(month from date) as mon, sum(price) as total from bills where drinker = :name group by  extract(month from date)order by mon;"
                                )
        rs = con.execute(search_query,name = name)
        results= [dict(row) for row in rs]
        for r in results:
            r["total"] = float(r["total"])
            r["mon"] = int(r["mon"])
    return results
#Get time spending
def getTimeSpendingYear(name):
    with engine.connect() as con:
        search_query = sql.text(
                                    "select extract(year from date) as yr, sum(price) as total from bills where drinker = :name group by extract(year from date)order by yr;"
                                )
        rs = con.execute(search_query,name = name)
        results= [dict(row) for row in rs]
        for r in results:
            r["total"] = float(r["total"])
            r["yr"] = float(r["yr"])
    return results
#Get sum price at all bars
def getSumPrice(name):
    with engine.connect() as con:
        search_query = sql.text(
                                    "SELECT sum(price) as total,bar FROM bills b WHERE drinker = :name GROUP BY b.bar ORDER BY total DESC;"
                                )
        rs = con.execute(search_query,name = name)
        results= [dict(row) for row in rs]
        for r in results:
            r["total"] = float(r["total"])
    return results


#show the top 10 bars where a given beer is sold
def top_sellers(beer_name):
    with engine.connect() as con:
        search_query = sql.text(
                                    "SELECT bar,count(*) as bills FROM beersOrdered WHERE beer = :beer_name GROUP BY bar ORDER BY bills DESC LIMIT 10;"
                                )

        rs = con.execute(search_query,beer_name=beer_name)
        results = [dict(row) for row in rs]

        if results is None:
            return None

        return results

#Get top ordered beers
def getTopBeersOrd(name):
    with engine.connect() as con:
        search_query = sql.text(
                                    "SELECT beer,sum(beerCount) as numBeers FROM beersOrdered WHERE drinker = :name GROUP BY beer ORDER BY numBeers DESC LIMIT 10;"
                                )

        rs = con.execute(search_query,name=name)
        results = [dict(row) for row in rs]

        if results is None:
            return None
        for r in results:
            r["numBeers"] = int(r["numBeers"])
        return results

#show the 10 biggest consumers of a given beer
def biggest_consumers(beer_name):
    with engine.connect() as con:
        search_query = sql.text(
                                    "SELECT drinker,count(*) as bills FROM beersOrdered WHERE beer = :beer_name GROUP BY drinker ORDER BY bills DESC LIMIT 10;"
                                )

        rs = con.execute(search_query,beer_name=beer_name)
        results = [dict(row) for row in rs]

        if results is None:
            return None
        return results
#show the times when a certain beer is sold the most
def time_distribution(beer_name):
    with engine.connect() as con:
        search_query = sql.text(
                                        "select sum(BeerCount) as BeerSoldByHour,hour(time) as hours from beersOrdered where beer = :beer_name group by hour(time) order by (hour(time)) asc;"
                                    )
        rs = con.execute(search_query,beer_name=beer_name)
        results = [dict(row) for row in rs]
        
        if results is None:
            return None
        for r in results:
            r["BeerSoldByHour"] = float(r["BeerSoldByHour"])    
        return results

#MODIFICATIONS BELOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOW
def modDrinkersInsert():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        name = request.form['drinkerName']
        state = request.form['state']
        phone = request.form['phoneNum']
        addr = request.form['address']
        name= str(name)
        state=str(state) 
        phone=str(phone) 
        addr=str(addr)
        print(name)
        print(state)
        print(phone)
        print(addr)
        if(name == ""):
            return "Query Invalid"
        else:
            query = text("INSERT IGNORE INTO drinkers (name,state,phonenumber,address) VALUES (:name,:state,:phonenumber,:address);")
            con.execute(query,name=name, state=state,phonenumber=phone,address=addr)
            trans.commit()
            con.close()
            return 
def modDrinkersUp():
    with engine.connect() as con:
        
        return 


def modDrinkersDel():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        name = request.form['drinkerName']
        state = request.form['state']
        phone = request.form['phoneNum']
        addr = request.form['address']
        name= str(name)
        state=str(state) 
        phone=str(phone) 
        addr=str(addr)
        print(name)
        print(state)
        print(phone)
        print(addr)
        if(name  == ""):
            return "Query Invalid"
        else:
            query = text("DELETE FROM drinkers WHERE name = :name;")
            con.execute(query,name=name)
            trans.commit()
            con.close()
            return 

def modBeers():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        beerName = request.form['beerName']
        manf = request.form['manf']
        beerName= str(beerName)
        manf=str(manf) 

        print(beerName)
        print(manf)
        if(beerName == ""):
            return "Query Invalid"
        else:
            query = text("INSERT IGNORE INTO beers (name,manf) VALUES (:beerName,:manf);")
            con.execute(query,beerName=beerName, manf=manf)
            trans.commit()
            con.close()
            return 
        return redirect("../Modify/Beers", code=302)

def modBeersUp():

        return redirect("../Modify/Beers", code=302)

def modBeersDel():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        beerName = request.form['beerName']
        manf = request.form['manf']
        beerName= str(beerName)
        manf=str(manf) 

        print(beerName)
        print(manf)
        if(beerName == ""):
            return "Query Invalid"
        else:
            query = text("DELETE FROM beers WHERE name = :beerName;")
            con.execute(query,beerName=beerName)
            trans.commit()
            con.close()
            return 
        return redirect("../Modify/Beers", code=302)


def modBars():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        name = request.form['barName']
        state = request.form['state']
        phone = request.form['phone']
        addr = request.form['addr']
        lic = request.form['lic']
        opens = request.form['open']   
        closes = request.form['close'] 
        name= str(name)
        state=str(state) 
        phone=str(phone) 
        addr=str(addr)
        lic = str(lic)
        opens=str(opens)
        closes =str(closes)

        #print(name)
        if(name == ""):
            return "Query Invalid"
        else:
            query = text("INSERT IGNORE INTO bars (name,state,phonenumber,address,opens,closes,license) VALUES (:name,:state,:phonenumber,:address,:opens,:closes,:license);")
            con.execute(query,name=name,state=state,phonenumber=phone,address=addr,opens=opens,closes=closes,license=lic)
            trans.commit()
            con.close()
            return 

def modBarsUp():

    return "Successful Query"

def modBarsDel():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        name = request.form['barName']
        state = request.form['state']
        phone = request.form['phone']
        addr = request.form['addr']
        lic = request.form['lic']
        opens = request.form['open']   
        closes = request.form['close'] 
        name= str(name)
        state=str(state) 
        phone=str(phone) 
        addr=str(addr)
        lic = str(lic)
        opens=str(opens)
        closes =str(closes)

        print(name)
        if(name == ""):
            return "Query Invalid"
        else:
            query = text("DELETE FROM bars WHERE name = :name;")
            con.execute(query,name=name)
            trans.commit()
            con.close()
            return 

def modBills():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        id = request.form['id']
        items = request.form['items']
        price = request.form['price']
        tip = request.form['tip']
        bar = request.form['bar']
        time = request.form['time']   
        drinker = request.form['drinker'] 
        date = request.form['date'] 
        id= int(id)
        items=str(items) 
        price=float(price) 
        tip=float(tip)
        bar = str(bar)
        time=str(time)
        drinker =str(drinker)
        date =str(date)
        #print(name)
        if(id == ""):
            return "Query Invalid"
        if(bar==""):
            return "Query Invalid"
        if(drinker==""):
            return "Query Invalid"
        else:
            query = text("INSERT IGNORE INTO bills (id,items,price,tip,bar,time,drinker,date) VALUES (:id,:items,:price,:tip,:bar,:time,:drinker,:date);")
            con.execute(query,id=id,items=items,price=price,tip=tip,bar=bar,time=time,drinker=drinker,date=date)
            trans.commit()
            con.close()
            return  

def modBillsUp():

    return "Successful Query"  

def modBillsDel():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        id = request.form['id']
        items = request.form['items']
        price = request.form['price']
        tip = request.form['tip']
        bar = request.form['bar']
        time = request.form['time']   
        drinker = request.form['drinker'] 
        date = request.form['date'] 
        id= int(id)
        items=str(items) 
        price=float(price) 
        tip=float(tip)
        bar = str(bar)
        time=str(time)
        drinker =str(drinker)
        date =str(date)
        #print(name)
        if(id == ""):
            return "Query Invalid"
        if(bar==""):
            return "Query Invalid"
        if(drinker==""):
            return "Query Invalid"
        else:
            query = text("DELETE FROM bills WHERE id = :id;")
            con.execute(query,id=id)
            trans.commit()
            con.close()
            return 

def modLikes():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        drinker = request.form['drinker']
        beer = request.form['beer']
        drinker= str(drinker)
        beer=str(beer) 

        if(drinker == ""):
            return "Query Invalid"
        if(beer == ""):
            return "Query Invalid"    
        else:
            query = text("INSERT IGNORE INTO likes (drinker,beer) VALUES (:drinker,:beer);")
            con.execute(query,drinker=drinker,beer=beer)
            trans.commit()
            con.close()
            return 

def modLikesUp():

    return "Successful Query" 

def modLikesDel():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        drinker = request.form['drinker']
        beer = request.form['beer']
        drinker= str(drinker)
        beer=str(beer) 

        if(drinker == ""):
            return "Query Invalid"
        if(beer == ""):
            return "Query Invalid"    
        else:
            query = text("DELETE FROM bills WHERE drinker = :drinker AND beer = :beer;")
            con.execute(query,drinker=drinker,beer=beer)
            trans.commit()
            con.close()
            return 



def modSells():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        bar = request.form['bar']
        beer = request.form['beer']
        price = request.form['price']
        bar= str(bar)
        beer=str(beer) 
        price=float(price)

        if(bar == ""):
            return "Query Invalid"
        if(beer == ""):
            return "Query Invalid"    
        else:
            query = text("INSERT IGNORE INTO sells (bar,beer,price) VALUES (:bar,:beer,:price);")
            con.execute(query,bar=bar,beer=beer,price=price)
            trans.commit()
            con.close()
            return 

def modSellsUp():

    return "Successful Query"  

def modSellsDel():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        bar = request.form['bar']
        beer = request.form['beer']
        price = request.form['price']
        bar= str(bar)
        beer=str(beer) 
        price=float(price)

        if(bar == ""):
            return "Query Invalid"
        if(beer == ""):
            return "Query Invalid"    
        else:
            query = text("DELETE FROM sells WHERE bar = :bar AND beer = :beer;")
            con.execute(query,bar=bar,beer=beer)
            trans.commit()
            con.close()
            return 




def modFreq():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        drinker = request.form['drinker']
        bar = request.form['bar']
        drinker= str(drinker)
        bar=str(bar) 

        if(drinker == ""):
            return "Query Invalid"
        if(bar == ""):
            return "Query Invalid"    
        else:
            query = text("INSERT IGNORE INTO frequents (drinker,bar) VALUES (:drinker,:bar);")
            con.execute(query,drinker=drinker,bar=bar)
            trans.commit()
            con.close()
            return 
def modFreqUp():

    return "Successful Query" 

def modFreqDel():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        drinker = request.form['drinker']
        bar = request.form['bar']
        drinker= str(drinker)
        bar=str(bar) 

        if(drinker == ""):
            return "Query Invalid"
        if(bar == ""):
            return "Query Invalid"    
        else:
            query = text("DELETE FROM frequents WHERE drinker = :drinker AND bar = :bar;")
            con.execute(query,drinker=drinker,bar=bar)
            trans.commit()
            con.close()
            return 
    return "Successful Query"     




def modBord():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        id = request.form['id']
        bar = request.form['bar']
        drinker = request.form['drinker']
        beercount = request.form['beercount']
        beer = request.form['beer']
        time = request.form['time']   
        date = request.form['date'] 
        id= int(id)
        bar=str(bar) 
        drinker=str(drinker) 
        beercount=int(beercount)
        beer = str(beer)
        time=str(time)
        date =str(date)
        #print(name)
        if(id == ""):
            return "Query Invalid"
        if(bar==""):
            return "Query Invalid"
        if(drinker==""):
            return "Query Invalid"
        if(beercount=="" or beercount == 0):
            return "Query Invalid"
        if(beer==""):
            return "Query Invalid"
        else:
            query = text("INSERT IGNORE INTO beersOrdered (id,bar,drinker,beercount,beer,date,time) VALUES (:id,:bar,:drinker,:beercount,:beer,:date,:time);")
            con.execute(query,id=id,bar=bar,drinker=drinker,beercount=beercount,beer=beer,date=date,time=time)
            trans.commit()
            con.close()
            return 

def modBordUp():
    #Values have New added to the end of them
    #Example: 
    # id = request.form['id']  Gets Current ID
    # idNew = request.form['idNew']  Gets New Value 

    return "Successful Query"  

def modBordDel():
    with engine.connect() as con:
        trans = con.begin()
        con.begin()
        id = request.form['id']
        bar = request.form['bar']
        drinker = request.form['drinker']
        beercount = request.form['beercount']
        beer = request.form['beer']
        time = request.form['time']   
        date = request.form['date'] 
        id= int(id)
        bar=str(bar) 
        drinker=str(drinker) 
        beercount=int(beercount)
        beer = str(beer)
        time=str(time)
        date =str(date)
        #print(name)
        if(id == ""):
            return "Query Invalid"
        if(bar==""):
            return "Query Invalid"
        if(drinker==""):
            return "Query Invalid"
        if(beercount=="" or beercount == 0):
            return "Query Invalid"
        if(beer==""):
            return "Query Invalid"
        else:
            query = text("DELETE FROM beersOrdered WHERE (id =:id AND bar=:bar AND drinker = :drinker AND beercount=:beercount AND beer=:beer AND date=:date AND time=:time);")
            con.execute(query,id=id,bar=bar,drinker=drinker,beercount=beercount,beer=beer,date=date,time=time)
            trans.commit()
            con.close()
            return
      