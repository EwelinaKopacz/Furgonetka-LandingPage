import React from 'react';
import './Offer.css';
import offerIconArray from '../../db/offerIcons';
import OfferCard from '../OfferCard/OfferCard';
// import offerPhoto1 from '../../assets/offer-photo1.svg';
// import offerPhoto2 from '../../assets/offer-photo2.svg';
// import offerPhoto3 from '../../assets/offer-photo3.svg';
// import offerPhoto4 from '../../assets/offer-photo4.svg';


const Offer= () => {
    const renderOfferCard =(array)=>{
        return array.map(item => <OfferCard item={item} key={item.id}/>)
    }
    return (
        <section className='offer'>
            <div className='offer__container'>
                <h2 className='offer__header'>Szeroki wybór przesyłek krajowych </h2>
                <div className='offer__cards card'>
                    {renderOfferCard(offerIconArray)}
                    {/* <OfferCard header='Przesyłki standardowe' text='Nadajesz przesyłki drobnicowe krajowe do różnych miast w Polsce? Wysyłaj koperty DOX (np. z dokumentami) i przesyłki kurierskie (nawet do 70 kg) – prywatnie i biznesowo za pomocą naszego serwisu.' photo={offerPhoto1} />
                    <OfferCard header='Wysyłka palet' text='Potrzebujesz przetransportować duże gabaryty lub ładunki złożone z wielu mniejszych elementów? Nadawaj przesyłki paletowe krajowe. W naszej ofercie znajdziesz wysyłkę europalet i półpalet euro, a także palet i półpalet przemysłowych.' photo={offerPhoto2} />
                    <OfferCard header='Przesyłki miejskie' text='Chcesz skorzystać z usługi dostawy paczki na terenie swojego miasta? Nadawaj przesyłki ekspresowe w kilkudziesięciu miejscowościach w Polsce z doręczeniem nawet w 40 minut. Współpracujemy z dwoma przewoźnikami miejskimi.' photo={offerPhoto3} />
                    <OfferCard header='Przesyłki nietypowe' text='Masz do wysłania coś nietypowego (np. meble, części samochodowe, motor, sprzęt AGD)? Zlecaj przesyłki gabarytowe krajowe i korzystaj z usług firm transportowych z całej Polski za pośrednictwem platformy Furgonetka Giełda.' photo={offerPhoto4} /> */}
                </div>
            </div>
        </section>
    )
}

export default Offer;