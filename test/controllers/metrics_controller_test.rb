require 'test_helper'

class MetricsControllerTest < ActionController::TestCase
  setup do
    @metric = metrics(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:metrics)
  end

  test "should create metric" do
    assert_difference('Metric.count') do
      post :create, metric: {  }
    end

    assert_response 201
  end

  test "should show metric" do
    get :show, id: @metric
    assert_response :success
  end

  test "should update metric" do
    put :update, id: @metric, metric: {  }
    assert_response 204
  end

  test "should destroy metric" do
    assert_difference('Metric.count', -1) do
      delete :destroy, id: @metric
    end

    assert_response 204
  end
end
