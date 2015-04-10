class MetricsController < ApplicationController
  before_action :set_metric, only: [:show, :update, :destroy]

  # GET /metrics
  # GET /metrics.json
  def index
    @metrics = Metric.all

    render json: @metrics
  end

  # GET /metrics/1
  # GET /metrics/1.json
  def show
    render json: @metric
  end

  # POST /metrics
  # POST /metrics.json
  def create
    @metric = Metric.new(metric_params)

    if @metric.save
      render json: @metric, status: :created, location: @metric
    else
      render json: @metric.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /metrics/1
  # PATCH/PUT /metrics/1.json
  def update
    @metric = Metric.find(params[:id])

    if @metric.update(metric_params)
      head :no_content
    else
      render json: @metric.errors, status: :unprocessable_entity
    end
  end

  # DELETE /metrics/1
  # DELETE /metrics/1.json
  def destroy
    @metric.destroy

    head :no_content
  end

  private

    def set_metric
      @metric = Metric.find(params[:id])
    end

    def metric_params
      params[:metric]
    end
end
