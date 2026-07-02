---
hreflangs:
    EN: '/contact/'
    PL: '/kontakt/'

meta:
    title: Kontakt
    description: 'Skontaktuj się z nami. Masz pytania o stronę www lub sklep internetowy? Chętnie pomożemy i dobierzemy najlepsze rozwiązania dla Twojej firmy. Napisz do nas!'       
---


::ui-container 
---
class: overflow-hidden bg-green-gray pt-16 pb-16 desktop:pt-24 desktop:pb-24
id: formularz
---


:::block-form
---
darkContainer: true
gridFields: true
class: mx-auto [&_.contents]:tablet:!flex [&_.contents]:tablet:flex-col-reverse [&_.contents]:tablet:justify-center
---

#header
## W czym możemy Ci pomóc?

#radio
::::form-radio
---
value: Strona
---
#label
Strona www
::::

::::form-radio
---
value: Sklep
---
#label
Sklep internetowy
::::

::::form-radio
---
value: Projektowanie
---
#label
Projektowanie UX/UI
::::

::::form-radio
---
value: Wsparcie i rozwój
---
#label
Wsparcie i rozwój
::::

::::form-radio
---
value: Współpraca
---
#label
Współpraca agencyjna
::::

::::form-radio
---
value: Inne
---
#label
Inne
::::


#formtitle
Wypełnij formularz


#fields
::::form-field
---
name: name
type: text
required: true
---

#placeholder
Imię i nazwisko

::::
::::form-field
---
name: company
type: text
required: true
---

#placeholder
Nazwa firmy

::::
::::form-field
---
type: email
required: true
---

#placeholder
E-mail

::::

::::form-field
---
name: phone
type: tel
required: false
---

#placeholder
Numer telefonu

::::

::::form-field
---
name: description
type: textarea
required: true
---

#placeholder
Treść wiadomości

::::

#buttontext
Wyślij wiadomość

#policytext
Wyrażam zgodę na otrzymywanie informacji handlowej, dostarczonej drogą elektroniczną przez firmę Webo oraz na przetwarzanie moich danych osobowych zgodnie z **[polityką prywatności](https://webo.agency/polityka-prywatnosci)**

#thanksMessage
### Dziękujemy za wysłanie wiadomości

#thanksDescription
Na Twoją wiadomość odpowiemy w ciągu 24h

#errorMessage
Niestety mamy chwilowy problem z działaniem formularza. Wyślij wiadomość na adres <a href="mailo:info@webo.agency">info@webo.agency</a>

#buttonBackText
Wróć do strony głównej

#side

::::block-header
---
class: mb-8 desktop:mb-10 desktop:[&_h2]:!text-[35px]
maxWidth: 610
---

#subtitle
### *-/* Kontakt

#title
## Realizacja celów wymaga pierwszego kroku!

#description
Wypełnij formularz, a my **skontaktujemy się z Tobą w&nbsp;ciągu 24h** i z chęcią odpowiemy na wszystkie Twoje pytania!

::::

#side-bottom

::::block-contact-info
---
tel: '+48725122385'
mail: info@webo.agency
address: 'Zwycięstwa 10, 44-100 Gliwice, Poland'
nip: '631 261 36 26'
regon: '382 471 232'
---

#icons
:::::tile-contact
---
iconUrl: '/img/icons/24h.png'
---

#text
Skontaktujemy się z Tobą w&nbsp;ciągu 24 godzin

:::::
:::::tile-contact
---
iconUrl: '/img/icons/board.png'
---

#text
Przeanalizujemy Twoje założenia i doradzimy

:::::
:::::tile-contact
---
iconUrl: '/img/icons/list.png'
---

#text
Stworzymy ofertę dopasowaną do Twoich potrzeb

:::::

#contacttext
Nie lubisz formularzy?
::::

::::block-brands
---
class: max-w-[576px] mb-10 desktop:mb-0 mt-10 !justify-start desktop:flex-wrap !gap-5 !gap-x-10 [&_picture]:opacity-90 [&_a]:max-w-[160px] [&_a]:max-h-[32px]
logos:
    - link: ''
      imgUrl: '/img/logos/isw_32.svg'  
    - link: ''
      imgUrl: '/img/logos/thoro_32.svg'        
    - link: ''
      imgUrl: '/img/logos/grow_32.svg'   
    - link: ''
      imgUrl: '/img/logos/mancraft_32.svg'                
    - link: ''
      imgUrl: '/img/logos/sollux_32.svg'
    - link: ''
      imgUrl: '/img/logos/etisoft_32.svg'       
    - link: ''
      imgUrl: '/img/logos/getsales_32.svg'         
    - link: ''
      imgUrl: '/img/logos/velair_32.svg'                      
---
::::
:::
::


::ui-container
---
id: opinie
class: mb-[50px] tablet:mb-[100px] pt-10 tablet:pt-[100px]
---

:::layout-columns-1-1
---
class: mb-10 tablet:mb-24 [&_.right]:flex [&_.right]:items-center [&_.right]:justify-end [&_.right]:gap-[20px]
---

#right
::::widget-rating-clutch
---
border: true
shrinkMobile: true
class: mt-6 tablet:mt-0
---
::::

::::widget-rating-google
---
border: true
class: mt-6 tablet:mt-0
rating: 5
link: https://www.google.com/search?q=webo+gliwice&sca_esv=581867933&ei=avdRZdPPHbCVxc8PqvGHwAM&ved=0ahUKEwjTrJKs38CCAxWwSvEDHar4ATgQ4dUDCBA&uact=5&oq=webo+gliwice&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHdlYm8gZ2xpd2ljZTICECZIsdsJUPXHCVj1xwlwAngAkAEAmAFXoAFXqgEBMbgBA8gBAPgBAeIDBBgBIEGIBgE&sclient=gws-wiz-serp#lrd=0x471131b61b903edb:0xe16af5e90276dac,1,,,,
text: See all our reviews
---
::::

#left
::::effect-appear
:::::block-header
---
maxWidth: 715
---

#subtitle
### *-/*  Opinie

#title
## Jesteśmy rekomendowani przez *małe i średnie przedsiębiorstwa*
:::::
::::
:::



#full
:::effect-appear
::::block-opinions

:::::tile-opinion
---
rating: 5
avatar: '/img/logos/isw.png'
opinionSource: '/img/icons/clutch.svg'
---


#author
Rafał Sanecki

#title
Head of Marketing - **IS-Wireless**<br>

#message
Webo dostarczyło **stabilną i skalowalną stronę internetową**, skutecznie wspierając nas w realizacji celów. Zespół regularnie dostarczał aktualizacje, **na bieżąco informował o postępach projektu i był transparentny**. Ostatecznie, **techniczne doświadczenie i skuteczna komunikacja** Webo były wizytówką ich pracy.

:::::

:::::tile-opinion
---
rating: 5
avatar: '/img/logos/velair.png'
opinionSource: '/img/icons/google.svg'
---


#author
Mateusz Pienkowski

#title
Właściciel - **Velair**<br>

#message
Świetna współpraca – **bardzo sprawna komunikacja, trafne pomysły** i spostrzeżenia, szybko, sprawnie i w **bardzo przyjemnej atmosferze**. Strona **wygląda super, wszystko działa jak trzeba**. Polecam z czystym sumieniem!

:::::

:::::tile-opinion
---
rating: 5
avatar: '/img/logos/Mancraft.png'
opinionSource: '/img/icons/clutch.svg'
---

#author
Radosław Cyganek

#title
Executive - **Proton Multimedia**

#message
Dzięki pracy Webo mój klient osiągnął wyższe pozycje w wyszukiwarkach, **poprawił satysfakcję użytkowników i zwiększył ich zaangażowanie**. Firma proaktywnie **zarządzała ryzykiem** i zapewniała alternatywne rozwiązanie, aby osiągnąć cele klienta. Ich **szybkość reakcji i kreatywność** były godne pochwały.

:::::
:::::tile-opinion
---
rating: 5
avatar: '/img/logos/DeltaHR.png'
opinionSource: '/img/icons/google.svg'
---

#author
Adam Przebinda

#title
Członek zarządu - **DeltaHR**

#message
Bardzo profesjonalna firma, indywidualne podejście do klienta, **dobry i ciągły kontakt** co pozwala na bieżąco kontrolować pracę nad projektem. **Każdy szczegół dopracowany** dokładnie tak jak tego oczekiwałem, śmiało i z czystym sumieniem mogę polecić. **Wiedza, podejście do klienta, czas realizacji** - wszystko 10/10.

:::::
:::::tile-opinion
---
rating: 5
avatar: '/img/logos/grow.svg'
opinionSource: '/img/icons/google.svg'
---

#author
Łukasz Jarota

#title
CEO & CO-OWNER - **Agencja Grow**

#message
Współpraca z ekipą jest niesamowita. **Gwarancja jakości**, **responsywności i kreatywności**. Polecam baaaardzo!

:::::
:::::tile-opinion
---
rating: 5
avatar: '/img/logos/thoro.svg'
opinionSource: '/img/icons/google.svg'
---

#author
Wojciech Szamocki

#title
Marketing Department - **Thoro / SOLLUX**

#message
Polecam współpracę z firmą Webo. **Rzetelnie wykonują założone taski** i **szukają najlepszych rozwiązań**.

:::::
:::::tile-opinion
---
rating: 5
avatar: '/img/logos/Swistak.png'
opinionSource: '/img/icons/google.svg'
---

#message
W firmie Webo zamówiłem **stronę www**. Już na etapie **badania potrzeb dało się czuć profesjonalizm**. Jestem **zadowolonym klientem** i używam swojej strony www w kontkatach z moimi klientami :)

#author
Bartłomiej Piotrowski

#title
Konsultant strategii w biznesie - **Krakowski świstak**



:::::
:::::tile-opinion
---
rating: 5
avatar: '/img/logos/Oravio.png'
opinionSource: '/img/icons/google.svg'
---

#author
Natalia Ryfa

#title
Business manager - **Oravio**

#message
Pomogli nam w przelaniu naszych wizji sklepu internetowego na realny, **dobrze odbierany przez klientów** i przede wszystkim sprawnie działający sklep! Dziękujemy i **polecamy Webo!** : )

:::::
:::::tile-opinion
---
rating: 5
avatar: '/img/logos/CaffeWasyl.png'
opinionSource: '/img/icons/google.svg'
---

#author
Adam Wasilewski

#title
Właściciel - **Caffe wasyl**

#message
**Dzięki Webo uratowałem swój biznes**, uruchomili mój sklep internetowy w **ciągu miesiąca**. Oby jak najwięcej takich ludzi!

:::::
::::
:::
::