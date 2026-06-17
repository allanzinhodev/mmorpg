const net = require('net');

console.log("Simulando OTClient conectando no Sertaria Server (Raw)...");

const client = new net.Socket();
client.connect(7171, '127.0.0.1', function() {
    console.log('Conectado com sucesso ao Servidor C++ na porta 7171!');
    
    // Simula os primeiros bytes do pacote de login do Tibia 10.98 (sem RSA)
    const payload = Buffer.from([0x06, 0x00, 0x01, 0x0A, 0x00, 0x00, 0x00, 0x00]);
    client.write(payload);
    console.log(`Enviado pacote simulado de ${payload.length} bytes:`, payload.toString('hex'));
});

client.on('data', function(data) {
    console.log('Resposta recebida do servidor: ' + data.toString('hex'));
    client.destroy(); 
});

client.on('close', function() {
    console.log('Conexão encerrada.');
});

client.on('error', function(err) {
    console.error('Erro de conexao:', err.message);
});
