<?php
declare(strict_types=1);
namespace Adeptivity\Model\Rest;

use Adeptivity\Model\Rest\NonEmptyTextField;
use Adeptivity\Model\Rest\Endpoint;

class LecturePost extends Endpoint
{
  private array $gravEntry;

  public function __construct()
  {
    parent::__construct('POST');
    $this->addField(new NonEmptyTextField('class_name', true))->addField(new NonEmptyTextField('course_name', true))->addField(new NonEmptyTextField('num_of_stu', true))->addField(new NonEmptyTextField('entry', true));
  }

  public function getPermissionCallback(): callable
  {
    // return '__return_true';
    return function (\WP_REST_Request $request): bool {
      $entryId = $request->get_param('entry');
      if (empty($entryId))
        return false;
      if (!\GFAPI::entry_exists(intval($entryId))) {
        return false;
      }
      // set graEntry array
      $this->gravEntry = \GFAPI::get_entry(intval($entryId));

      return is_user_logged_in() && (get_current_user_id() === intval($this->gravEntry['created_by']));

    };
  }

  public function getCallback(): callable
  {
    /**
     * @return \WP_REST_Response|\WP_Error
     */
    return function (\WP_REST_Request $request) {
      $params = $request->get_params();
      // there sure exists an entry because we checked and saved itit in get_permission
      $entry = $this->gravEntry;
      $entry['5'] = $params['num_of_stu'];
      $entry['3'] = $params['class_name'];
      $entry['4'] = $params['course_name'];
      $entry['19'] = get_user_by('id', get_current_user_id())->user_login;
      $entry['21'] = get_user_by('id', get_current_user_id())->display_name;
      $updated = \GFAPI::update_entry($entry);
      $e = \GFAPI::get_entry($entry['id']);
      return new \WP_REST_Response(
        [
          'id' => $e['id'],
          'attendees' => $e['5'],
          'video' => $e['1'],
          'createdAt' => $e['date_created'],
          'title' => $e['3'],
          'course' => $e['4'],
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
        ],
        201
      );
    };
  }


}