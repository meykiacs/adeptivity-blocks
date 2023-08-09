<?php

namespace Adeptivity\Service;

class MemberPress
{

  public function isUserSchool(): bool
  {
    $user = \MeprUtils::get_currentuserinfo();
    $rresult = false;
    if ($user !== false) {
      $transactions = $user->active_product_subscriptions('transactions');

      if (!empty($transactions)) {
        foreach ($transactions as $txn) {
          if (($sub = $txn->subscription()) !== false) {
            //Recurring subscription
            $ca = \MPCA_Corporate_Account::find_corporate_account_by_obj_id($sub->id, 'subscriptions');
          } else {
            //Non Recurring subscription
            $ca = \MPCA_Corporate_Account::find_corporate_account_by_obj_id($txn->id, 'transactions');
          }
          if (!empty($ca) && isset($ca->id) && !empty($ca->id)) {
            $rresult = true;
            break;
          }
        }
      }
    }
    return ($rresult);

  }


  /**
   * @return int[]
   */
  public function getSubUsers() : array
  {
    $users = [];
    $user = \MeprUtils::get_currentuserinfo();
    $sub_user_ids = array();

    if ($user !== false) {
      $transactions = $user->active_product_subscriptions('transactions');

      if (!empty($transactions)) {
        foreach ($transactions as $txn) {
          if (($sub = $txn->subscription()) !== false) {
            //Recurring subscription
            $ca = \MPCA_Corporate_Account::find_corporate_account_by_obj_id($sub->id, 'subscriptions');
          } else {
            //Non Recurring subscription
            $ca = \MPCA_Corporate_Account::find_corporate_account_by_obj_id($txn->id, 'transactions');
          }

          if (!empty($ca) && isset($ca->id) && !empty($ca->id)) {
            $sub_users = $ca->sub_users();

            foreach ($sub_users as $user) {
              $sub_user_ids[] = $user->ID;
            }
          }
        }

        $sub_user_ids = array_unique($sub_user_ids);
      }
    }

    return ($sub_user_ids);
  }
}