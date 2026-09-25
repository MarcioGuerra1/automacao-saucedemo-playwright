// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  /* Executa os testes em paralelo para ir mais rápido */
  fullyParallel: true,
  /* Impede que o teste quebre o build se esquecer um console.log perdiddo */
  forbidOnly: !!process.env.CI,
  /* Número de tentativas se o teste falhar */
  retries: process.env.CI ? 2 : 0,
  /* Quantos robôs rodam ao mesmo tempo */
  workers: process.env.CI ? 1 : undefined,
  /* Formato do relatório */
  reporter: 'html',
  
  /* 🌟 CONFIGURAÇÕES DE MÍDIA COMPARTILHADAS 🌟 */
  use: {
    /* Define que os testes vão rodar mostrando o navegador na tela por padrão */
    headless: false,
    
    /* 📸 Tira uma foto (screenshot) automaticamente ao final de cada teste */
    screenshot: 'on',
    
    /* 🎥 Grava um vídeo completo de toda a execução do robô */
    video: 'on',
  },

  /* Navegadores onde o teste vai rodar */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});