<?php

namespace Adeptivity\Model\Field;

class TextField extends Field
{

  public function __construct($name, $isRequired)
  {
    $this->setType('string');
    $this->setName($name);
    $this->setIsRequired($isRequired);
  }

  public function getValidateCallback(): callable
  {
    return Validate::textField();
  }
  public function getSanitizeCallback(): callable
  {
    return Sanitize::textField();
  }

}