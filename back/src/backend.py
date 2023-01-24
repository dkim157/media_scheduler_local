from flask import Flask
from flask import request
from flask import jsonify
import json
# for linking frontend-backend
from flask_cors import CORS
# for mongo db
# from model_mongodb import User

app = Flask(__name__)
# CORS stands for Cross Origin Requests.
# Here we'll allow requests coming from any domain. Not recommended for production environment.
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/login', methods=['GET', 'POST'])
def get_users():
    if request.method == 'GET':
        return 'Hello Login'
    #    search_username = request.args.get('name')
    #    search_job = request.args.get('job')
    #    if search_username and search_job:
    #        users = User().find_by_name_and_job(search_username, search_job)
    #    elif search_username:  # updated for db_access
    #        users = User().find_by_name(search_username)
    #    elif search_job:
    #        users = User().find_by_job(search_job)
    #    else:  # updated for db_access
    #        users = User().find_all()
    #    return {"users_list": users}
    if request.method == 'POST':
        resp = request.get_json()
        return resp['name']
        # userToAdd['id'] = gen_random_id() # check for duplicate before appending.. todo
        # users['users_list'].append(userToAdd)
        # updated for db_access
        # make DB request to add user
        # newUser = User(userToAdd)
        # newUser.save()
        # resp = jsonify(newUser), 201
        # return resp


#@app.route('/users/<id>', methods=['GET', 'DELETE'])
#def get_user(id):
#    if request.method == 'GET':
#       # update for db access
#        user = User({"_id": id})
#        if user.reload():
#            return user
#        else:
#            return jsonify({"error": "User not found"}), 404
#    elif request.method == 'DELETE':
#         user = User({"_id": id})
#         resp = user.remove()
#         if (resp.deleted_count == 1):
#            return {}, 204
#         else:
#           return jsonify({"error": "User not found"}), 404
