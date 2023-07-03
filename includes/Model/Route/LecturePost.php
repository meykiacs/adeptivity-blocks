<?php
declare(strict_types=1);
namespace Adeptivity\Model\Route;

use Adeptivity\Model\Field\NonEmptyTextField;

class LecturePost extends Route
{

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
    return '__return_true';
  }

}