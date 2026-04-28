# Online Sporting Goods Forecaster

> **Check out the [interactive project page](https://mei-hazeslip.github.io/online-sporting-goods-forecaster.html) for a simple breakdown and live demo.**

## Goal
Predicting number of sales for different sports category in the following years.

## Data
This package used the online sporting goods dataset from [Kaggle](https://www.kaggle.com/datasets/gabrielsantello/wholesale-and-retail-orders-dataset).

## Clone The Repository
```
git clone https://github.com/amayaaaa24/whole_sale_repository.git

```

## Setting-up Virtual Environment (venv)
```
cd whole_sale_repository
# pip install virtualenv
virtualenv --python=python3 venv
# Mac or Linux
source venv/bin/activate
# Windows
# source venv/Scripts/activate 

pip freeze # show what's been installed
pip install -r requirements.txt

```

## Running a Flask Application:

1. Navigate to your project directory (the folder where your app.py is located): 
```cd /path/to/your/project```

2. Set the FLASK_APP environment variable (if necessary):

- On Linux/macOS:  ```export FLASK_APP=app.py```

- On Windows (Command Prompt): ```set FLASK_APP=app.py```

- On Windows (PowerShell): ```$env:FLASK_APP = "app.py"```

3. Run Flask:
```flask run```

4. Access your app in a browser:

Go to: http://127.0.0.1:5000/ or http://localhost:5000/ in your browser.

If you're running the app in debug mode, you can add this command before running:
```export FLASK_ENV=development```
Or for Windows Command Prompt:
```set FLASK_ENV=development```
In PowerShell:
```$env:FLASK_ENV = "development"```

