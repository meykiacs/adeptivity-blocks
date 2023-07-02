<?php
declare(strict_types=1);
namespace Adeptivity\Model\Route;

use Adeptivity\Model\Field\Field;

abstract class Route
{
  private string $namespace;
  private string $route;
  private string $method;

  public function __construct(string $namespace, string $route, string $method) {
    $this->namespace = $namespace;
    $this->route = $route;
    $this->method = $method;
  }

  public function asArgs() : array {
    $args = [];
    foreach ($this->fields as $field) {
      $args[$field->getName()] = $field->asArgs();
    }

    return $args;
  }

  /**
   * @var Field[]
   */
  public array $fields;

  public function addField(Field $field) : self {
    $this->fields[] = $field;
    return $this;
  }

  abstract public function getPermissionCallback() : callable;

  abstract public function getCallback() : callable;

	/**
	 * @return string
	 */
	public function getNamespace(): string {
		return $this->namespace;
	}
	
	/**
	 * @param string $namespace 
	 * @return self
	 */
	public function setNamespace(string $namespace): self {
		$this->namespace = $namespace;
		return $this;
	}
	
	/**
	 * @return string
	 */
	public function getRoute(): string {
		return $this->route;
	}
	
	/**
	 * @param string $route 
	 * @return self
	 */
	public function setRoute(string $route): self {
		$this->route = $route;
		return $this;
	}
	
	/**
	 * @return string
	 */
	public function getMethod(): string {
		return $this->method;
	}
	
	/**
	 * @param string $method 
	 * @return self
	 */
	public function setMethod(string $method): self {
		$this->method = $method;
		return $this;
	}
}

