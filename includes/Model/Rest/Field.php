<?php
declare(strict_types=1);
namespace Adeptivity\Model\Rest;

abstract class Field
{
	private string $name;
	private bool $isRequired;
	private string $type;

	abstract public function getValidateCallback(): callable;
	abstract public function getSanitizeCallback(): callable;

	public function asArgs(): array
	{
		return [
			'required' => $this->getIsRequired(),
			'validate_callback' => $this->getValidateCallback(),
			'sanitize_callback' => $this->getSanitizeCallback(),
			'type' => $this->getType()
		];
	}

	/**
	 * @return string
	 */
	public function getName(): string
	{
		return $this->name;
	}

	/**
	 * @param string $name 
	 * @return self
	 */
	public function setName(string $name): self
	{
		$this->name = $name;
		return $this;
	}

	/**
	 * @return bool
	 */
	public function getIsRequired(): bool
	{
		return $this->isRequired;
	}

	/**
	 * @param bool $isRequired 
	 * @return self
	 */
	public function setIsRequired(bool $isRequired): self
	{
		$this->isRequired = $isRequired;
		return $this;
	}

	/**
	 * @return string
	 */
	public function getType(): string
	{
		return $this->type;
	}

	/**
	 * @param string $type 
	 * @return self
	 */
	public function setType(string $type): self
	{
		$this->type = $type;
		return $this;
	}
}