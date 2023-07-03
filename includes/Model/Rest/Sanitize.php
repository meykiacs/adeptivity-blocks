<?php
declare(strict_types=1);
namespace Adeptivity\Model\Rest;

class Sanitize
{

  public static function email(): callable
  {
    return function (string $param, \WP_REST_Request $request, string $key) {
      $sane = sanitize_email($param);
      if ($sane !== $param) {
        return new \WP_Error('invalid_rest_param', esc_html__('Email is invalid', ADEPTIVITY_TEXTDOMAIN), ['status' => 400]);
      }
      return $sane;
    };
  }


  public static function password(): callable
  {
    return function (string $param, \WP_REST_Request $request, string $key) {
      $sane = sanitize_text_field($param);
      if ($sane !== $param) {
        return new \WP_Error('invalid_rest_param', esc_html__('Password is invalid', ADEPTIVITY_TEXTDOMAIN), ['status' => 400]);
      }
      return $sane;
    };
  }

  public static function textField(): callable
  {
    return function (string $param, \WP_REST_Request $request, string $key) {
      $sane = sanitize_text_field($param);
      if ($sane !== $param) {
        return new \WP_Error('invalid_rest_param', sprintf(__('%s is invalid', ADEPTIVITY_TEXTDOMAIN), $key), ['status' => 400]);
      }
      return $sane;
    };
  }


}