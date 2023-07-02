<?php

namespace Adeptivity\Model\Field;

class NonEmptyTextField extends TextField
{
  public function getValidateCallback(): callable
  {
    return Validate::nonEmptyTextField();
  }
}