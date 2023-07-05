<?php
declare(strict_types=1);
namespace Adeptivity\Model\Rest;
use Adeptivity\Model\Rest\Endpoint;

class VideoPost extends Endpoint
{
  private array $uploadedFile;
  private string $destination;
  private string $grav_entry_id;
  private string $filename;
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

  public function __construct()
  {
    parent::__construct('POST');
  }
  
  public function getPermissionCallback(): callable
  {
    // return fn() => is_user_logged_in();
    return '__return_true';
  }

  public function getCallback(): callable
  {
    return function (\WP_REST_Request $request) : \WP_REST_Response|\WP_Error {
      if (!empty($_FILES['file'])) {
        $this->uploadedFile = $_FILES['file'];
        $validate = $this->validateFile();
        if ( ! $validate) {
          return $validate;
        };
        $move = $this->moveFile();
        if ($move !== true) {
          return $move;
        }
        $grav = $this->submitToGrav();
        if (!$grav['is_valid']) {
          return $grav;
        }
        $this->grav_entry_id = $grav['entry_id'];
        $entry = \GFAPI::get_entry($this->grav_entry_id);
        $entry['1'] = home_url() . '/wp-content/uploads/lectures/' . $this->filename;
        $updated = \GFAPI::update_entry($entry);

        return new \WP_REST_Response(['entry' => $this->grav_entry_id], 201);
      }
      return new \WP_REST_Response(['Bad Request'], 400);
    };
  }

  private function validateFile(): bool|\WP_Error
  {
    switch ($this->uploadedFile['error']) {
      case UPLOAD_ERR_OK:
        break;
      case UPLOAD_ERR_NO_FILE:
        return new \WP_Error('file_upload_error', 'No File uploaded');
      case UPLOAD_ERR_INI_SIZE:
        return new \WP_Error('file_upload_error', 'File too large');
      default:
        return new \WP_Error('file_upload_error', 'An Error Occured');
    }

    if ($this->uploadedFile['size'] > self::ALLOWED_SIZE) {
      return new \WP_Error('file_upload_error', 'File too large');
    }

    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_file($finfo, $this->uploadedFile['tmp_name']);
    if (!in_array($mimeType, self::MIME_TYPES)) {
      return new \WP_Error('file_upload_error', "Invalid file type");
    }

    return true;
  }

  private function moveFile() : bool|\WP_Error {
    $pathinfo = pathinfo($this->uploadedFile['name']);
    $base = $pathinfo['filename'];
    $base = preg_replace('/[^a-zA-Z0-9_-]/', '_', $base);
    $base = 'user_' . get_current_user_id() . '_' . $base;
    $this->filename = $base . "." . $pathinfo['extension'];

    $this->destination = ABSPATH . 'wp-content/uploads/lectures/' . $this->filename;

    $i = 1;
    while (file_exists($this->destination)) {
      $this->filename = $base . "-$i." . $pathinfo['extension'];
    $this->destination = ABSPATH . 'wp-content/uploads/lectures/' . $this->filename;
      $i++;
    }

    if (!move_uploaded_file($this->uploadedFile['tmp_name'], $this->destination)) {
      return new \WP_Error('file_upload_error', "unable to move the file");
    }

    return true;
  }

  private function submitToGrav() : array|\WP_Error {
    return \GFAPI::submit_form(1, ['input_3' => 'New Class']);
  }
}