class ApplicationController < ActionController::API
    include ActionController::Cookies

    def home
      if check_authentication_cookies
          render json: {
              message: 'Welcome Home'
          }, status: 200
      else
          unauthenticated
      end    
    end

    def login
      type = app_login(email: params[:email], password: params[:password])
        if type == :regular
            store_session(params[:email], "regular")
            authenticated
        elsif type == :admin
            store_session(params[:email], "admin")
            authenticated
        elsif  type == :manager
            store_session(params[:email], "manager")
            authenticated        
        else
            unauthenticated
        end
  end

  def logout
    delete_session
    logged_out
  end

  def admin
    if check_admin_access_session
        render json: {
            message: "Welcome Admin"
        }
    else
        unauthenticated
    end
  end


  private

    #regular employee = mail@mail.com, password: any, (view n add requests)
    #manager = mail@manager.com, password: any, (view, update n approve requests)
    #admin = admin@admin.com, password: admin1234, 
    #admin can view, delete, edit, update all requests, users, assets

  def app_login (email: nil, password: nil)
      if email == "mail@mail.com" && password =="mail123"
        :regular
      elsif email == "admin@mail.com" && password == "admin123"
        :admin
      elsif  email == "manager@mail.com" && password == "manager123"
        :manager
      elsif  email == "finance@mail.com" && password == "finance123"
        :finance
      else 
        nil
    end
  end 

  #set cookies
  def store_cookie(email, type)
    cookies[:email] = email
    cookies[:type] = type
  end

  #set sessions
  def store_session(email, type)
    session[:email] = email
    session[:type] = type
  end

  #delete cookies
  def delete_cookies
    cookies.delete[:type]
    cookies.delete[:email]
  end

  def delete_session
    session.delete[:type]
    session.delete[:email]
  end

  # check authentication (cookies)
  def check_authentication_cookies
    unauthenticated unless cookies[:email]
  end

  # check authentication (session)
  def check_authentication_session
      !!session[:email]  
  end

  # check admin access
  def check_admin_access_session
      session[:type] == 'admin'
  end

  # check manager access
  def check_manager_access_session
    session[:type] == 'manager'
  end

  # check finance access
  def check_manager_access_session
    session[:type] == 'finance'
  end

  # check regular access
  def check_manager_access_session
    session[:type] == 'regular'
  end


  # unauthenticated
  def unauthenticated
      render json: {
          message: 'You are not allowed to view this page'
      }, status: 401
  end

  def authenticated
    # type = cookies[:type]
      render json: {
          message: "Logged in as #{session[:type]}"
      }, status: 200
  end

  def logged_out
      render json: {
          message: "Goodbye!"
      }, status: 200
  end


end
