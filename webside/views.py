from flask import Blueprint, render_template, request, flash, jsonify, redirect, url_for, session
from flask_login import login_required, current_user
import json
import pandas as pd
import statsmodels.api as sm
import os, uuid
from flask_login import LoginManager, login_user, login_required, logout_user, current_user, UserMixin 
import matplotlib
matplotlib.use('Agg')
from matplotlib import pyplot as plt




views = Blueprint('views', __name__)

@views.route('/')
def landing_page():
    if current_user.is_authenticated:
        return redirect(url_for('views.home'))
    else:
        return redirect(url_for('auth.login'))

@views.route('/home', methods=['GET', 'POST'])
@login_required
def home():
    if request.method == 'POST':
        option = request.form.get('option')
        session['option'] = option
        return jsonify({ 'redirect_url': url_for('views.work', option=option) })
    return render_template("home.html", user=current_user)


@views.route('/work/<option>', methods=['GET', 'POST'])
@login_required
def work(option):
    if request.method == 'POST':
        return redirect(url_for('views.upload_file', option=option))
    return render_template('work.html', option=option, user=current_user)
