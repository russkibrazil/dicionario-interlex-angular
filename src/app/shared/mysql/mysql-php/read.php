<?php

require 'database.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){

  $request = json_decode($postdata);
  
  $resultados = [];
  $sql = $request->comando;
  
  if($retorno = mysqli_query($con,$sql))
  {
    $tabela = $request->tabela;
    $i = 0;
    switch ($tabela) {
      case 'palavra':
        while($row = mysqli_fetch_assoc($retorno))
        {
          $resultados[$i]['id'] = $row['Id'];
          $resultados[$i]['lema'] = $row['Lema'];
          $resultados[$i]['ClasseGram'] = $row['ClasseGram'];
          $resultados[$i]['idioma'] = $row['Idioma'];
          $resultados[$i]['notasGramatica'] = $row['notas_gramatica'];
          $resultados[$i]['id_conjuga'] = $row['notas_cultura'];
          $resultados[$i]['Genero'] = $row['Genero'];
          $resultados[$i]['Definicao'] = $row['Definicao'];
          $i++;
        }
        break;
        
        default:
          break;
      
    }
  
    echo json_encode($resultados);
  }
  else
  {
    http_response_code(404);
  }
}