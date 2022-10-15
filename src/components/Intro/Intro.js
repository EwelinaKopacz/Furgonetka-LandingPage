import React from 'react';
import './Intro.css';

const Intro = () => {
    return (
        <section className='intro'>
            <div className='intro__container'>
                <div className='intro__description'>
                    <h2 className='intro__header'><span className='intro__special'>Wybierz tanie i szybkie</span> przesyłki krajowe</h2>
                    <p className='intro__text'>Wyceniaj i wysyłaj tanie paczki krajowe bez podpisywania umowy i określania minimum logistycznego. U nas płacisz tylko za nadane przesyłki. Nie pobieramy abonamentu za prowadzenie konta czy korzystanie z dostępnych narzędzi.</p>
                </div>
            </div>

        </section>
    )
}

export default Intro;