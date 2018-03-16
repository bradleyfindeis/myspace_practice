class Api::PostsController < ApplicationController
  before_action :set_post
  
  def index
    render json: Post.all.order(created_at: :desc)
  end

  def all_users
    render json: User.all
  end 

  def show
    render json: @post
  end

  def create
    post = Post.create(post_params)
    if post.save
      render json: post
    else
      render json: { errors: post.errors.full_messages.join(',') }, status: 422
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: { errors: @post.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @post.destroy
  end

  private
    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:author, :title, :body)
    end
end