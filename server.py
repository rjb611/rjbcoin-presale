from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)

@app.route('/enregistrer', methods=['POST'])
def enregistrer():
    data = request.get_json()
    with open("transactions.json", "a") as f:
        json.dump(data, f)
        f.write('\n')
    return jsonify({"status": "ok"})

if __name__ == '__main__':
    app.run(port=8000)

