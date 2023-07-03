<?php
declare(strict_types=1);
namespace Adeptivity\Model\Route;

class VideoPost extends Route
{
  private array $uploadedFile;
  const ALLOWED_SIZE = 10000000;
  const MIME_TYPES = [
    'video/mp4',
    'video/mpeg',
    'video/ogg',
    'video/mp2t',
    'video/3gpp',
    'video/3gpp2',
    'video/x-msvideo
  '
  ];

  public function __construct(string $namespace, string $route)
  {
    parent::__construct($namespace, $route, 'POST');
  }
  public function getPermissionCallback(): callable
  {
    // return fn() => is_user_logged_in();
    return '__return_true';
  }

  public function getCallback(): callable
  {
    return function ($request) {
      var_dump($request);
      // error_log(print_r($request, true));
      if (!empty($_FILES['file'])) {
        $this->uploadedFile = $_FILES['file'];
        error_log(print_r($this->uploadedFile, true));
        $this->saveFile();
      }
    };
  }

  private function saveFile(): bool|\WP_Error
  {
    $upload_overrides = ['test_form' => false];
    $movefile = wp_handle_upload($this->uploadedFile, $upload_overrides);

    if ($movefile && !isset($movefile['error'])) {
      return new \WP_Error('success_file', 'success file', $movefile);

    } else {
      return new \WP_Error('error_file', 'errorfile', $movefile);
    }
  }

}