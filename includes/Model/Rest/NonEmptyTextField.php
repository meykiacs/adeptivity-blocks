<?php
declare(strict_types=1);
namespace Adeptivity\Model\Rest;

class NonEmptyTextField extends TextField
{
  public function getValidateCallback(): callable
  {
    return Validate::nonEmptyTextField();
  }
}