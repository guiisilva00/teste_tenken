"use client";

import { useState } from "react";

const slides = [
    {
        title: "A prática que inspira o próximo passo.",
        text: "O SENAI é uma das raízes da Tenken. É no encontro entre educação técnica, tecnologia e prática que nasce o cuidado com os equipamentos e com quem aprende com eles.",
        image: "/assets/img/home-img/senai_frente.jpg",
        alt: "Fachada de uma unidade do SENAI sob o céu azul",
    },
    {
        title: "Conhecimento que ganha forma no laboratório.",
        text: "Bancadas, ferramentas e equipamentos aproximam a teoria dos desafios reais. A Tenken ajuda a manter esse ambiente organizado e pronto para a próxima descoberta.",
        image: "/assets/img/home-img/abb_oficina.jpg",
        placeholder: "Adicionar fotografia real de oficina ou bancada de robótica",
    },
    {
        title: "Cada uso prepara o caminho para o próximo.",
        text: "Inspecionar, registrar e cuidar dos equipamentos cria uma rotina mais segura para explorar novas ideias e construir o futuro da automação.",
        image: "/assets/img/home-img/aluno_professor.jpg",
        placeholder: "Adicionar fotografia real de laboratório ou equipamento em uso",
    },
];

export default function CarrosselInstitucional() {
    const [active, setActive] = useState(0);
    const slide = slides[active];
    const move = (direction) => setActive((current) => (current + direction + slides.length) % slides.length);

    return (
        <section className="carrossel-institucional" aria-label="História e propósito da Tenken">
            <div className={`carrossel-institucional__visual${slide.image ? " carrossel-institucional__visual--foto" : " carrossel-institucional__visual--grafico"}`}>
                {slide.image ? <img className="carrossel-institucional__imagem" src={slide.image} alt={slide.alt} /> : (
                    <div className="carrossel-institucional__placeholder" aria-label={slide.placeholder}>
                        <span className="placeholder__marca" aria-hidden="true">T</span>
                        <span className="placeholder__aviso">Imagem institucional</span>
                        <span className="placeholder__instrucao">{slide.placeholder}</span>
                    </div>
                )}
                <div className="carrossel-institucional__conteudo" key={active}>
                    <p className="carrossel-institucional__sobretitulo">{slide.eyebrow}</p>
                    <h2>{slide.title}</h2>
                    <p className="carrossel-institucional__texto">{slide.text}</p>
                    <p className="carrossel-institucional__legenda">{slide.caption}</p>
                </div>
                <span className="carrossel-institucional__contador" aria-live="polite">{String(active + 1).padStart(2, "0")} <span>/</span> {String(slides.length).padStart(2, "0")}</span>
                <div className="carrossel-institucional__controles" aria-label="Controles do carrossel">
                    <button type="button" onClick={() => move(-1)} aria-label="Slide anterior">‹</button>
                    <div className="carrossel-institucional__indicadores" aria-label="Selecionar slide">
                        {slides.map((item, index) => <button key={item.eyebrow} type="button" aria-label={`Ir para slide ${index + 1}`} aria-current={index === active ? "true" : undefined} onClick={() => setActive(index)} />)}
                    </div>
                    <button type="button" onClick={() => move(1)} aria-label="Próximo slide">›</button>
                </div>
            </div>
        </section>
    );
}
