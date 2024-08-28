document.addEventListener('DOMContentLoaded', function () {
    var formData = JSON.parse(localStorage.getItem("formData"));
    var situacoesAprendizagem = parseInt(formData.situAprendizagem);
    var situacaoAtual = parseInt(localStorage.getItem("situacaoAtual"));

    document.getElementById("situacaoTitle").textContent = `Situação de Aprendizagem ${situacaoAtual}`;

    document.getElementById("backButton").addEventListener('click', function(event) {
        event.preventDefault();
        
        // Save current form data before going back
        var currentFormData = {
            nomeSituacao: document.getElementById("nomeSituacao").value,
            quantidadeAulas: document.getElementById("nAulas").value,
            indicadores: document.getElementById("indicadores").value,
            conhecimentos: document.getElementById('conhecimentos').value,
            habilidades: document.getElementById('habilidades').value,
            atitudes: document.getElementById('atitudes').value,
            contexto: document.getElementById("contexto").value,
            marcasFormativas: Array.from(document.querySelectorAll('input[name="marcasFormativas"]:checked')).map(cb => cb.value),
        };

        var todasSituacoes = JSON.parse(localStorage.getItem("todasSituacoes")) || [];
        todasSituacoes[situacaoAtual - 1] = currentFormData;
        localStorage.setItem("todasSituacoes", JSON.stringify(todasSituacoes));

        // Navigate back to index.html
        window.location.href = "index.html";
    });

    document.getElementById("situacaoForm").addEventListener('submit', function(event) {
        event.preventDefault();

        var situacaoData = {
            nomeSituacao: document.getElementById("nomeSituacao").value,
            quantidadeAulas: document.getElementById("nAulas").value,
            indicadores: document.getElementById("indicadores").value,
            conhecimentos: document.getElementById('conhecimentos').value,
            habilidades: document.getElementById('habilidades').value,
            atitudes: document.getElementById('atitudes').value,
            contexto: document.getElementById("contexto").value,
            marcasFormativas: Array.from(document.querySelectorAll('input[name="marcasFormativas"]:checked')).map(cb => cb.value),
        };

        var todasSituacoes = JSON.parse(localStorage.getItem("todasSituacoes")) || [];
        todasSituacoes[situacaoAtual - 1] = situacaoData;
        localStorage.setItem("todasSituacoes", JSON.stringify(todasSituacoes));

        window.location.href = "pdf.html";
    });
});