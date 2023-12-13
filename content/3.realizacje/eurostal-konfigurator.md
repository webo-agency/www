---
introduction.title: 'Dynamiczny konfigurator 3D dla polskiego producenta garaży blaszanych'
introduction.description: 'Konfigurator Eurostal umożliwia pełne dostosowanie garaży blaszanych dla klientów z wielu krajów. Wdrożone rozwiązanie pozwala dynamicznie generować model 3D garażu na podstawie opcji wybranych przez użytkownika.'
type:
    - Aplikacja internetowa
technologies:
    - Wordpress CMS
    - TailwindCSS
image.url: '/img/content-images/case-eurostall-img1.png'
homepage_hidden: false
public: true
---


::page-section-md
---
class: mb-10 tablet:mb-20 mt-[100px] tablet:mt-[200px]
---
:::effect-appear-md
::::block-header-case-md
---
class: mx-default
logoUrl: '/img/logos/Eurostal.png'
link: 'https://eurostal.cz/p/nakonfigurujte-si-garaz/'
---

#title
## Eurostal - dynamiczny konfigurator 3D dla polskiego producenta garaży blaszanych

#description
Konfigurator Eurostal umożliwia pełne dostosowanie garaży blaszanych dla klientów z wielu krajów. Wdrożone rozwiązanie pozwala dynamicznie generować model 3D garażu na podstawie opcji wybranych przez użytkownika.

#buttontext
Zobacz online

<!-- TODO: tags shold be taken from the data on top of .md file -->
#tags
- Aplikacja internetowa

::::
:::
::

::page-section-md
---
class: mb-[50px] tablet:mb-[150px]
---
:::effect-appear-md
::::prose-figure{src="/img/content-images/case-eurostall-img1.png"}
::::
:::
::

::page-section-md
---
class: static-content mb-10 tablet:mb-[90px]
---
:::effect-appear-md
---
class: mx-default
---
### **O kliencie**
:::
:::effect-appear-md
---
class: mx-default flex flex-col md:flex-row gap-10 lg:gap-20
---

::::prose-p3

**Eurostal** działa na rynku od 2009 roku. Dzięki wieloletniemu doświadczeniu i wykwalifikowanej kadrze stał się liderem w produkcji lekkich konstrukcji stalowych. W ofercie Eurostal znajdują się garaże blaszane, hale, magazyny, domki narzędziowe i ogrodowe, wiaty na śmieci i drewno, kojce dla psów oraz różne, nawet najbardziej skomplikowane, nietypowe konstrukcje realizowane zawsze z myślą o spełnieniu kolejnej potrzeby klienta..

Swoją działania prowadzi głównie poza granicami Polski (m.in. w Czechach, Słowacji na Węgrzech, w Rumunii oraz na terenie Niemiec i Włoch) gdzie zyskał uznanie tysięcy klientów. 
::::

::::prose-bg
---
class: min-w-[280px] md:self-baseline !p-[30px] !mx-0 font-semibold
--- 

::::prose-p6
---
class: uppercase [&_p]:!mb-2
---
_Kraj_
::::
::::prose-p4
---
class: mx-0 [&_p]:!mb-4
---
**Polska**
::::

::::prose-p6
---
class: uppercase [&_p]:!mb-2
---
_Branża_
::::
::::prose-p4
---
class: mx-0 [&_p]:!mb-4
---
**Produkcja konstrukcji stalowych**
::::

::::prose-p6
---
class: uppercase [&_p]:!mb-2
---
_Zakres prac_
::::
::::prose-p4
---
class: mx-0 [&_p]:!mb-4
---
**Projektowanie UX/UI, Programowanie**
::::
:::
::

:prose-hr{class='mb-10 md:mb-[100px]'}


::page-section-md
---
class: static-content mb-[50px] desktop:mb-[100px]
---
:::effect-appear-md
---
class: mx-default
---

### **Wyzwanie**

#### **Konfigurator 3D produktu na Woocommerce**

::::prose-p3
Przed wdrożeniem kofniguratora, użytkownik miał możliwość dokonania zamówienia tylko z dostępnej oferty produktowej. Stworzenie garażu na wymiar wymagało bezpośredniego kontaktu i omawiania szczegółów podczas rozmowy z handlowcem.

Zlecenie zgłoszone przez klienta polegało na przygotowaniu konfiguratora 3D garaży, który usprawni i skróci proces sprzedażowy. Stworzenie konfiguratora miało na celu umożliwienie użytkownikom swobodnego zaprojektowania swojego garażu, skracając tym samym czas pracy handlowców jaki musieli poświęcać na ustalanie szczegółów konstrukcji. 
::::
:::

:::effect-appear-md
::::prose-bg{class='font-semibold'}
:::::prose-p1
**Zakres prac**
:::::

:::::prose-p2
- Projekt UX/UI konfiguratora
- Wdrożenie silnika konfiguratora z wykorzystaniem biblioteki ThreeJS
- Wdrożenie pól wyboru zgodnie z przygotowanym projektem
- Połączenie rozwiązania Frontend z silnikiem konfiguratora
- Wdrożenie konfiguratora w środowisku klienta
:::::
::::
:::
::

::page-section-md
---
class: static-content mb-[50px] tablet:mb-[100px]
---

:::effect-appear-md
---
class: mx-default
---

### **Kluczowe elementy**

::::prose-p3
Podczas pracy nad konfiguratorem, musieliśmy zwrócić szczególną uwagę na aspekt techniczny produkowanych przed klienta garaży. Wymiar konstrukcji uzależniony jest od wielu elementów, które do swoich potrzeb może dostosować użytkownik. Prócz aspektów technicznych bardzo ważne było umożliwienie podglądu garażu w trybie rzeczywistym.
::::
:::

:::effect-appear-md
---
class: mx-default
---

1. ::::prose-p3
---
class: mx-0 [&_p]:mt-4
---
**Zgodność parametrów technicznych garażu**

Wszystkie parametry garażu muszą być spójne ze specyfikacją techniczną tak aby skonfigurowany garaż był zgodny z rzeczywistymi możliwościami produkcji. M.in. wysokość garażu uzależniona jest od wysokości wybranej bramy, rodzaj dachu i wysokości garażu wpływa na możliwość osadzenia drzwi, a stopień nachylenia dachu uzależniony jest od szerokości. Wszystkie zależności obliczane są na podstawie danych technicznych przekazanych przez klienta.
::::

2. ::::prose-p3
---
class: mx-0 [&_p]:mt-4
---
**Dynamiczny model 3D** 

Jednym z głównych założeń była możliwość swobodnego oglądania garażu. Wymagało to stworzenia widoku 3D, dzięki któremu użytkownik może obracać garaż w dowolnym kierunu oraz przybliżać / oddalać widok za pomocą scrollowania. Zmiany w modelu generowane są automatycznie po wybraniu opcji przeż użytkownika, bez konieczności przeładowania strony.
::::
3. ::::prose-p3
---
class: mx-0 [&_p]:mt-4
---
**Wybór wyposażenia** 

Konfigurując swój garaż użytkownik ma możliwość ustawienia wysokości i szerokości bramy oraz dostosowania jej położenia w poziomie. Jako opcja dostępne są także drzwi i okna które można swobodnie przesuwać w 2 płaszczyznach. Prócz tego użytkownik może wybrać rodzaj konstrukcji, kolor poszycia oraz dobrać akcesoria np. system alarmowy.
::::
4. ::::prose-p3
---
class: mx-0 [&_p]:mt-4
---
**Automatyzacja wyceny** 

System konfguratora umożliwia rozbudowę o automatyczne obliczanie ceny, na bazie wybranych przez użytkownika parametrów, opcji i akcesoriów. Na ten moment, zgodnie z decyzją klienta, funkcjonalność jest wyłączona.
::::
:::
::


::page-section-md
---
class: mb-[50px] tablet:mb-[100px]
---
:::effect-appear-md
::::prose-figure
---
src: '/img/content-images/case-eurostall-img1.png'
rounded: false
---
::::
:::
::

::page-section-md
---
class: static-content mb-[50px] desktop:mb-[100px]
---
:::effect-appear-md
---
class: mx-default
---

### **Nasze rozwiązanie**

::::prose-p3
Z racji na to że sklep internetowy Eurostal zbudowany jest na platformie WooCommerce, musieliśmy zapewnić poprawność działania właśnie w tym systemie. Wdrożone rozwiązanie musiało umożliwić edycję parametrów konfiguratora z poziomu panelu administracyjnego Wordpress.

Bardzo duża ilość możliwych konfiguracji garażu uniemożliwiała skorzystanie z prostych form wizualizacji np. wgrania zdjęć różnych wersji garażu. Silnik konfiguratora Eurostal zbudowany został z wykorzystaniem biblioteki ThreeJS, która rysuje model 3D wykonując algorytm obliczający współrzędne. Oznacza to ze konfigurator nie potrzebuje wgrania gotowych zdjęć / renderów produktu - model 3D generowany jest w czasie rzeczywistym.

::::
:::

:::effect-appear-md
---
class: mx-default
---
#### **Wykorzystane technologie**
:::

:::effect-appear-md
---
class: mx-default
---
::::prose-figure{src="/img/content-images/case-eurostall-tech.png"}
---
class: hidden tablet:block
---
::::
:::
::

::page-section-md
---
class: static-content mb-[50px] desktop:mb-[100px]
---
:::effect-appear-md
---
class: mx-default
---

### **Rezultat pracy**
::::prose-p3
Ostatnim etapem prac było wykonanie optymalizacji zdjęć które przyśpieszyło czas ładowania, dodanie prostego formularza kontaktowego oraz publikacja konfiguratora na kilku sklepach klienta.

W efekcie prac nasz klient otrzymał gotowy konfigurator produktu który może być dowolnie rozbudowywany, zarówno o funkcje sprzedażowe, jak i konstrukcyjne wpływające na wygląd i specyfikę sprzedawanych garaży - zastosowana technologia nie stawia ograniczeń. 
::::
:::
::


::page-section-md
---
class: mb-[50px] tablet:mb-[100px]
---
#full
:::effect-appear-md
::::prose-figure
---
src: '/img/content-images/case-eurostall-img1.png'
rounded: false
---
:::
::

::page-section-md
---
class: static-content mb-[50px] tablet:mb-[100px]
---
:::effect-appear-md
::::block-columns-5-7-md
---
class: mx-default
---

#left
:::::block-clutch
---
rating: 5
quality: 5
schedule: 5
cost: 5
refer: 5
---
:::::

#right

:::::block-opinion-md

#title
### **Opinia klienta**

#content

::::::prose-p3
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

**Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.**
::::::

#author

#### **Jan Kowalski**

#authorTitle
::::::prose-p6
JOB POSITION - **EUROSTALL**
::::::
:::::
::::
:::
::

::page-section-md
---
class: mb-[50px] tablet:mb-[100px]
---
:::effect-appear-md
::::block-cta-md
---
button.link: https://www.webo.agency/kontakt
button.title: 'Skontaktuj się'
---

#subtitle
*-/* Zainteresowała Cię nasza oferta?

#title
## Skontaktuj się z nami i rozpocznij współpracę

::::
:::
::


