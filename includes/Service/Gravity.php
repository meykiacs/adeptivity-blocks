<?php
declare(strict_types=1);

namespace Adeptivity\Service;

class Gravity
{
  private function rawEntriesByUser(int $id = 0) : array
  {
    $table_id = '1';
    $entries = \GFAPI::get_entries($table_id, [
      'status' => 'active',
      'field_filters' => [
        [
          'key' => 'created_by',
          'value' => $id
        ]
      ]
    ]);
    return $entries;
  }

  public function getEntriesByUser($id)
  {
    return array_map(function ($e) {
      return [
        'id' => $e['id'],
        'attendees' => $e['5'],
        'video' => $e['1'],
        'createdAt' => $e['date_created'],
        'title' => $e['3'],
        'course' => $e['4'],
        'grade' => $e['23'],
        'date' => $e['24'],
        'divergent' => intval($e['10']),
        'lateral' => intval($e['14']),
        'aesthetic' => intval($e['13']),
        'system' => intval($e['11']),
        'inspirational' => intval($e['12']),
        'analyzed' => (!empty($e['10'])) &&
        (!empty($e['14'])) &&
        (!empty($e['13'])) &&
        (!empty($e['11'])) &&
        (!empty($e['12']))
      ];
    }, $this->rawEntriesByUser($id));
  }

  public function scoreHistoryByUser(int $id)
  {
    $entries = $this->getEntriesByUser($id);
    return array_map(fn($e) => [
      'date' => $e['createdAt'],
      'divergent' => $e['divergent'],
      'lateral' => $e['lateral'],
      'aesthetic' => $e['aesthetic'],
      'system' => $e['system'],
      'inspirational' => $e['inspirational'],
    ], $entries);
  }
}