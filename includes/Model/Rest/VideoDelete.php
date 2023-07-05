<?php
declare(strict_types=1);
namespace Adeptivity\Model\Rest;
use Adeptivity\Model\Rest\Endpoint;

class VideoDelete extends Endpoint
{
  private array $gravEntry;

  public function __construct()
  {
    parent::__construct('DELETE');
  }

  public function getPermissionCallback(): callable
  {
    return function (\WP_REST_Request $request): bool {
      $entryId = $request->get_param('entry');
      // var_dump($entryId); wp_die();
      if (empty($entryId))
        return false;
      if (!\GFAPI::entry_exists(intval($entryId))) {
        return false;
      }
      // set graEntry array
      $this->gravEntry = \GFAPI::get_entry(intval($entryId));

      return is_user_logged_in() && (get_current_user_id() === intval($this->gravEntry['created_by']));

      // return fn() => is_user_logged_in();    
      // return '__return_true';
    };
  }

  public function getCallback(): callable
  {
    return function (\WP_REST_Request $request): \WP_REST_Response|\WP_Error {
      $entryId = $request->get_param('entry');
      $url = $this->gravEntry['1'];
      $filename = explode("/", $url);
      $filename = end($filename);
      $path = ABSPATH . 'wp-content/uploads/lectures/' . $filename;
      $success = unlink($path);
      if (! $success) return new \WP_REST_Response(['error' => 'Server Error'], 500);

      $result = \GFAPI::delete_entry($entryId);
      if ($result === true) {
        return new \WP_REST_Response(['entry' => $entryId]);
      }
      return $result;
    };
  }
}