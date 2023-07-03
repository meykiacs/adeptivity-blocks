<?php
declare(strict_types=1);

namespace Adeptivity\Model\Rest;

class Validate
{

  public static function email(): callable
  {
    return function (string $param, \WP_REST_Request $request, string $key) {
      return is_email($param);
    };
  }

  public static function password(): callable
  {
    return function (string $param, \WP_REST_Request $request, string $key) {
      return
        preg_match('/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]{8,20}$/', $param) === 1;
    };
  }

  public static function textField(): callable
  {
    return function (string $param, \WP_REST_Request $request, string $key) {
      return is_string($param);
    };
  }

  public static function nonEmptyTextField() : callable {
    return function (string $param, \WP_REST_Request $request, string $key) {
      return self::textField()($param, $request, $key) && (!empty($param));
    };
  }

}