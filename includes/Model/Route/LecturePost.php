<?php
declare(strict_types=1);
namespace Adeptivity\Model\Route;

use Adeptivity\Model\Field\NonEmptyTextField;

class LecturePost extends Route
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
    $this->addField(new NonEmptyTextField('class_name', true));
  }
  public function getPermissionCallback(): callable
  {
    return fn() => is_user_logged_in();
  }

  public function getCallback(): callable
  {
  }

}