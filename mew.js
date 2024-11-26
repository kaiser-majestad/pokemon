let mewtwo = {
    habilidades: ["Sincronía", "Presión"],
    tipo: ["Psíquico"],
    naturaleza: "Serio",
    evolucion: "No evoluciona",
    ancestros: ["Mew"]
};

let tablaMewtwo = document.querySelector("#tablamewtwo"); 
tablaMewtwo.innerHTML += `
    <tr>
        <td>${mewtwo.habilidades.join(', ')}</td>
        <td>${mewtwo.tipo.join(', ')}</td>
        <td>${mewtwo.naturaleza}</td>
        <td>${mewtwo.evolucion}</td>
        <td>${mewtwo.ancestros.join(', ')}</td>
    </tr>
`;