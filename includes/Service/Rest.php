<?php
declare(strict_types=1);
namespace Adeptivity\Service;

use Adeptivity\Model\Route\Route;

class Rest
{

  /**
   * Summary of routes
   * @var Route[]
   */
  private array $routes;

  public function addRoute(Route $route): self
  {
    $this->routes[] = $route;
    return $this;
  }

  public function register()
  {
    add_action(
      'rest_api_init',
      function () {
        
        foreach ($this->routes as $route) {
          // var_dump($route->getMethod()); wp_die();
          register_rest_route(
            $route->getNamespace(),
            '/' . $route->getRoute(),
            [
              'callback' => $route->getCallback(),
              // function (\WP_REST_Request $request) {
                // var_dump($request->get_json_params());wp_die();
                // return new \WP_REST_Response($request->get_json_params(), 200);
              // },
              'permission_callback' => $route->getPermissionCallback(),
              'methods' => $route->getMethod(),
              'args' => $route->asArgs()
            ]
          );
        }
      }
    );

  }

}