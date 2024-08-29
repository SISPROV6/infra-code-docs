// eslint-disable-next-line @typescript-eslint/no-require-imports
const execSync = require('child_process').execSync;

// Função para atualizar a versão
function buildApp(configuration) {

  // Faz o build com a configuração informada
   try {
      switch (configuration) {
         case "dev": execSync(`ng build --configuration development --output-path=dist/infra-code-docs-dev --base-href /SisproErpCloud/InfraCodeDocs/`, { stdio: 'inherit' }); break;
         case "prod": execSync(`ng build --configuration production --output-path=dist/infra-code-docs-prod --base-href /SisproErpCloud/InfraCodeDocs/`, { stdio: 'inherit' }); break;
         default: execSync(`ng build --configuration development --output-path=dist/infra-code-docs-dev --base-href /SisproErpCloud/InfraCodeDocs/`, { stdio: 'inherit' }); break;
      }

      console.log(`\n\nBuild realizado com sucesso na configuração de ${configuration == "prod" ? "PRODUÇÃO" : "DESENVOLVIMENTO"}!\n`);
   }
   catch(error) {
      console.log(`\n\nOcorreu um erro ao realizar o build.\nMensagem abaixo: ${error}\n\nABORTANDO PROCESSO...`);
   }
}

// Configuração informada, desenvolviemnto ("dev") ou produção ("prod")
const config = process.argv[2];
buildApp(config);
