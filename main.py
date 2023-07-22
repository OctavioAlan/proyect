from webside import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True) # debug=True para que se actualice automáticamente cuando se hagan cambios  