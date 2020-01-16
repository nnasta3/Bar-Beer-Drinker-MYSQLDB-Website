from flask import Flask,jsonify,make_response,request
import json
from flask import make_response,render_template,redirect
from BarBeerDrinker import database
import os
from flask import Flask, send_from_directory, redirect

app = Flask(__name__)

# map the root folder to index.html
@app.route("/")
def home():
    return redirect("/index.html")

@app.route("/<path:path>")
def root(path):
        """
        This is the cheesy way I figured out to serve the Angular2 app created
        by the angular-cli system. It essentially serves everything from
        static/dist (the distribution directory created by angular-cli)
        """
        return send_from_directory(os.path.join(os.getcwd(), "static/dist"), path)


#Get all bars
@app.route('/api/bars',methods=['GET'])
def get_bars():
    return jsonify(database.get_bars())

#Get all beers
@app.route('/api/beers',methods=['GET'])
def get_beers():
    return jsonify(database.get_beers())



#Get beers bar sells
@app.route('/api/bar/sells/<name>', methods=["GET"])
def getBarSells(name):
 try:
    if name is None:
        raise ValueError("Bar is not specified.")
    bar = database.getBarSells(name)
    if bar is None:
        return make_response("No bar found with the given name.", 404)
    return jsonify(bar)
 except ValueError as e:
    return make_response(str(e), 400)
 except Exception as e:
    return make_response(str(e), 500)

#find specific bar
@app.route('/api/bar/<name>', methods=["GET"])
def getBar(name):
 try:
    if name is None:
        raise ValueError("Bar is not specified.")
    bar = database.getBar(name)
    if bar is None:
        return make_response("No bar found with the given name.", 404)
    return jsonify(bar)
 except ValueError as e:
    return make_response(str(e), 400)
 except Exception as e:
    return make_response(str(e), 500)


#DRINKER PAGE
@app.route('/api/drinkers',methods=['GET'])
def getDrinkers():
    try:
        drinker = database.getDrinkers()

        if drinker is None:
            return make_response("No drinker found with that given name.",404)
        return jsonify(drinker)

    except ValueError as e:
        return make_response(str(e),400)
    except Exception as e:
        return make_response(str(e),500)


@app.route('/api/drinker/<name>',methods=['GET'])
def getBills(name):
    try:
        if name is None:
            raise ValueError("Drinker name cannot be NULL.")

        drinker = database.getBills(name)

        if drinker is None:
            return make_response("No drinker found with that given name.",404)
        return jsonify(drinker)

    except ValueError as e:
        return make_response(str(e),400)
    except Exception as e:
        return make_response(str(e),500)

#Get monthly and yearly spending
@app.route('/api/drinker/spending/<name>',methods=['GET'])
def getTimeSpending(name):
    try:
        if name is None:
            raise ValueError("Drinker name cannot be NULL.")

        drinker = database.getTimeSpending(name)

        if drinker is None:
            return make_response("No drinker found with that given name.",404)
        return jsonify(drinker)

    except ValueError as e:
        return make_response(str(e),400)
    except Exception as e:
        return make_response(str(e),500)


#Get monthly and yearly spending
@app.route('/api/drinker/spending/year/<name>',methods=['GET'])
def getTimeSpendingYear(name):
    try:
        if name is None:
            raise ValueError("Drinker name cannot be NULL.")

        drinker = database.getTimeSpendingYear(name)

        if drinker is None:
            return make_response("No drinker found with that given name.",404)
        return jsonify(drinker)

    except ValueError as e:
        return make_response(str(e),400)
    except Exception as e:
        return make_response(str(e),500)
#Get Money spent at all bars
@app.route('/api/drinker/sum/<name>',methods=['GET'])
def getSumPrice(name):
    try:
        if name is None:
            raise ValueError("Drinker name cannot be NULL.")

        drinker = database.getSumPrice(name)

        if drinker is None:
            return make_response("No drinker found with that given name.",404)
        return jsonify(drinker)

    except ValueError as e:
        return make_response(str(e),400)
    except Exception as e:
        return make_response(str(e),500)


#Get most ordered beers
@app.route('/api/drinker/topOrd/<name>',methods=['GET'])
def getTopBeersOrd(name):
    try:
        if name is None:
            raise ValueError("Drinker name cannot be NULL.")

        drinker = database.getTopBeersOrd(name)

        if drinker is None:
            return make_response("No drinker found with that given name.",404)
        return jsonify(drinker)

    except ValueError as e:
        return make_response(str(e),400)
    except Exception as e:
        return make_response(str(e),500)


#BAR PAGE
@app.route('/api/bar/largest_spenders/<bar_name>',methods=['GET'])
def largest_spenders(bar_name):
    try:
        if bar_name is None:
            raise ValueError("Bar name cannot be NULL.")

        spenders = database.largest_spenders(bar_name)

        if spenders is None:
            return make_response("No bar found with that given name.",404)
        return jsonify(spenders)

    except ValueError as e:
        return make_response(str(e),400)
    except Exception as e:
        return make_response(str(e),500)

@app.route('/api/bar/most_popular/<bar_name>',methods=['GET'])
def most_popular(bar_name):
    try:
        if bar_name is None:
            raise ValueError("Bar name cannot be NULL.")

        popular = database.most_popular(bar_name)

        if popular is None:
            return make_response("No bar found with that given name.",404)
        return jsonify(popular)
    except ValueError as e:
        return make_response(str(e),400)
    except Exception as e:
        return make_response(str(e),500)

@app.route('/api/bar/produce_most/<bar_name>',methods=['GET'])
def produce_most(bar_name):
    try:
        if bar_name is None:
            raise ValueError("Bar name cannot be NULL.")

        most = database.produce_most(bar_name)

        if most is None:
            return make_response("No bar found with that given name.",404)
        return jsonify(most)
    except ValueError as e:
        return make_response(str(e),400)
    except Exception as e:
        return make_response(str(e),500)

#BEER PAGE
@app.route('/api/beer/top_sellers/<beer_name>',methods=['GET'])
def top_sellers(beer_name):
    try:
         if beer_name is None:
             raise ValueError("Beer name cannot be NULL.")

         top = database.top_sellers(beer_name)

         if top is None:
             return make_response("No beer found with that given name.",404)
         return jsonify(top)
    except ValueError as e:
        return make_response(str(e),400)
    except Exception as e:
        return make_response(str(e),500)

@app.route('/api/beer/biggest_consumers/<beer_name>',methods=['GET'])
def biggest_consumers(beer_name):
    try:
        if beer_name is None:
            raise ValueError("Beer name cannot be NULL.")

        big = database.biggest_consumers(beer_name)

        if big is None:
            return make_response("No beer found with that given name.",404)
        return jsonify(big)

    except ValueError as e:
        return make_response(str(e),400)
    except Exception as e:
        return make_response(str(e),500)

@app.route('/api/beer/time_distribution/<beer_name>',methods=['GET'])
def time_distribution(beer_name):
    try:
        if beer_name is None:
            raise ValueError("Beer name cannot be NULL.")

        time = database.time_distribution(beer_name)

        if time is None:
            return make_response("No beer found with that given name.",404)

        return jsonify(time)
    except ValueError as e:
        return make_response(str(e),400)
    except Exception as e:
        return make_response(str(e),500)


#Modify Drinkers     
@app.route('/api/modDrinkers',methods=['POST'])
def modDrinkersInsert():
        
        database.modDrinkersInsert()

        return redirect("../Modify/Drinkers", code=302)

@app.route('/api/modDrinkersUp',methods=['POST'])
def modDrinkersUp():
        
        database.modDrinkersUp()

        return redirect("../Modify/Drinkers", code=302)

@app.route('/api/modDrinkersDel',methods=['POST'])
def modDrinkersDel():
        
        database.modDrinkersDel()

        return redirect("../Modify/Drinkers", code=302)

#Modify Beers
@app.route('/api/modBeers',methods=['POST'])
def modBeers():

        database.modBeers()

        return redirect("../Modify/Beers", code=302)

@app.route('/api/modBeersUp',methods=['POST'])
def modBeersUp():

        database.modBeersUp()

        return redirect("../Modify/Beers", code=302)

@app.route('/api/modBeersDel',methods=['POST'])
def modBeersDel():

        database.modBeersDel()

        return redirect("../Modify/Beers", code=302)




@app.route('/api/modBars',methods=['POST'])
def modBars():

        database.modBars()

        return redirect("../Modify/Bars", code=302)

@app.route('/api/modBarsUp',methods=['POST'])
def modBarsUp():

        database.modBarsUp()

        return redirect("../Modify/Bars", code=302)

@app.route('/api/modBarsDel',methods=['POST'])
def modBarsDel():

        database.modBarsDel()

        return redirect("../Modify/Bars", code=302)


@app.route('/api/modBills',methods=['POST'])
def modBills():

        database.modBills()

        return redirect("../Modify/Bills", code=302)

@app.route('/api/modBillsUp',methods=['POST'])
def modBillsUp():

        database.modBillsUp()

        return redirect("../Modify/Bills", code=302)
        
@app.route('/api/modBillsDel',methods=['POST'])
def modBillsDel():

        database.modBillsDel()

        return redirect("../Modify/Bills", code=302)


@app.route('/api/modLikes',methods=['POST'])
def modLikes():

        database.modLikes()

        return redirect("../Modify/Likes", code=302)

@app.route('/api/modLikesUp',methods=['POST'])
def modLikesUp():

        database.modLikesUp()

        return redirect("../Modify/Likes", code=302)

@app.route('/api/modLikesDel',methods=['POST'])
def modLikesDel():

        database.modLikesDel()

        return redirect("../Modify/Likes", code=302)



@app.route('/api/modSells',methods=['POST'])
def modSells():

        database.modSells()

        return redirect("../Modify/Sells", code=302)

@app.route('/api/modSellsUp',methods=['POST'])
def modSellsUp():

        database.modSellsUp()

        return redirect("../Modify/Sells", code=302)

@app.route('/api/modSellsDel',methods=['POST'])
def modSellsDel():

        database.modSellsDel()

        return redirect("../Modify/Sells", code=302)


@app.route('/api/modFreq',methods=['POST'])
def modFreq():

        database.modFreq()

        return redirect("../Modify/Frequents", code=302)

@app.route('/api/modFreqUp',methods=['POST'])
def modFreqUp():

        database.modFreqUp()

        return redirect("../Modify/Frequents", code=302)

@app.route('/api/modFreqDel',methods=['POST'])
def modFreqDel():

        database.modFreqDel()

        return redirect("../Modify/Frequents", code=302)


@app.route('/api/modBord',methods=['POST'])
def modBord():

        database.modBord()

        return redirect("../Modify/BeersOrdered", code=302)

@app.route('/api/modBordUp',methods=['POST'])
def modBordUp():

        database.modBordUp()

        return redirect("../Modify/BeersOrdered", code=302)

@app.route('/api/modBordDel',methods=['POST'])
def modBordDel():

        database.modBordDel()

        return redirect("../Modify/BeersOrdered", code=302)