<?php
function HighMoreOften()
{
    $percentage = rand(1, 100);
    if ($percentage <= 2) {
      return 4;
    }else if ($percentage <= 5) {
      return 3;
    }else if ($percentage <= 10) {
      return 2;
    }else{
      return 1;
    }
}
echo HighMoreOften();
echo HighMoreOften();
echo HighMoreOften();
echo HighMoreOften();
echo HighMoreOften();
echo HighMoreOften();
echo HighMoreOften();
echo HighMoreOften();
echo HighMoreOften();
echo HighMoreOften();

function normalisasiNomorHP($phone) {
  $phone = trim($phone);
  if (str_starts_with($phone, '+62')) {
    $phone = '0' . substr($phone, 3);
  }else if(str_starts_with($phone, '62')) {
    $phone = '0' . substr($phone, 2);
  }

  return preg_replace('/[- .]/', '', $phone);
}

function tesNomorHP($phone) {
  if(!preg_match('/^08[1-9][0-9]{7,10}$/', $phone)) {
    return false;
  }
  return true;
}

function deteksiOperatorSeluler($phone) {
  $prefix = substr($phone, 0, 4);
  if(preg_match("/(0831|0832|0833|0838)/i", $prefix))return 'axis';
  if(preg_match("/(0895|0896|0897|0898|0899)/i", $prefix))return 'three';
  if(preg_match("/(0817|0818|0819|0859|0878|0877)/i", $prefix))return 'xl';
  if(preg_match("/(0814|0815|0816|0855|0856|0857|0858)/i", $prefix))return 'indosat';
  if(preg_match("/(0812|0813|0852|0853|0821|0823|0822|0851|0811)/i", $prefix))return 'telkomsel';
  if(preg_match("/(0881|0882|0883|0884|0885|0886|0887|0888|0889)/i", $prefix))return 'smartfren';
  return null;
}

function validasiNomorSeluler($phone) {
  $phone = normalisasiNomorHP($phone);
  if(tesNomorHP($phone) && !!deteksiOperatorSeluler($phone)){
    return $phone;
  }else{
    return false;
  }
}