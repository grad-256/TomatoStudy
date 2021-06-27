<?php

namespace controller\comfirm;


function get()
{
  \view\comfirm\index();
}

function post()
{

  redirect('comfirm');
  echo "test";
}
