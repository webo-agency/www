---
introduction.title: 'Eurostal - dynamiczny konfigurator 3D dla polskiego producenta garaży blaszanych'
introduction.description: 'Konfigurator Eurostal umożliwia pełne dostosowanie garaży blaszanych dla klientów z wielu krajów. Wdrożone rozwiązanie pozwala dynamicznie generować model 3D garażu na podstawie opcji wybranych przez użytkownika.'
type:
    - Wsparcie/Rozwój
technologies:
    - Wordpress CMS
    - TailwindCSS
image.url: '/img/case-studies/Eurostal-bg.png'
logo.url: '/img/logos/Eurostal.png'
tile_hidden: false
tile_order: 3
public: true
hreflangs:
    # EN: '/case-studies/eurostal-konfigurator'
    PL: '/realizacje/eurostal-konfigurator/'
---


::ui-container
---
class: mb-10 tablet:mb-20 mt-[100px] tablet:mt-[200px]
---
:::effect-appear
::::block-header-case
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

#tags
- Aplikacja internetowa

::::
:::
::

::ui-container
---
class: mb-[50px] tablet:mb-[150px]
---
:::effect-appear
::::prose-figure{src="/img/content-images/case-eurostall-img1.png"}
::::
:::
::

::ui-container
---
class: static-content mb-10 tablet:mb-[90px]
---
:::effect-appear
---
class: mx-default
---
### **O kliencie**
:::
:::effect-appear
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


::ui-container
---
class: static-content mb-[50px] desktop:mb-[100px]
---
:::effect-appear
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

:::effect-appear
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

::ui-container
---
class: static-content mb-[50px] tablet:mb-[100px]
---

:::effect-appear
---
class: mx-default
---

### **Kluczowe elementy**

::::prose-p3
Podczas pracy nad konfiguratorem, musieliśmy zwrócić szczególną uwagę na aspekt techniczny produkowanych przed klienta garaży. Wymiar konstrukcji uzależniony jest od wielu elementów, które do swoich potrzeb może dostosować użytkownik. Prócz aspektów technicznych bardzo ważne było umożliwienie podglądu garażu w trybie rzeczywistym.
::::
:::

:::effect-appear
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


::ui-container
---
class: static-content
---
:::effect-appear
---
class: mx-default [&_h3]:!mb-0
---
### **Pełna konfiguracja konstrukcji**
:::
::

::ui-container
---
class: mb-[50px] tablet:mb-[100px]
---

:::effect-appear
::::prose-figure{src="/img/content-images/case-eurostall-img2.png"}
::::
:::
::

::ui-container
---
class: static-content
---
:::effect-appear
---
class: mx-default [&_h3]:!mb-0
---
### **Dobór dodatków i wybór kolorystyki**
:::
::

::ui-container
---
class: mb-[50px]
---

:::effect-appear
::::prose-figure{src="/img/content-images/case-eurostall-img3.png"}
::::
:::
::

::ui-container
---
class: static-content mb-[50px] desktop:mb-[100px]
---
:::effect-appear
---
class: mx-default
---

### **Nasze rozwiązanie**

#### **Konfigurator produktu 3D z wykorzystaniem ThreeJS**

::::prose-p3
Z racji na to że sklep internetowy Eurostal zbudowany jest na platformie WooCommerce, musieliśmy zapewnić poprawność działania właśnie w tym systemie. Wdrożone rozwiązanie musiało umożliwić edycję parametrów konfiguratora z poziomu panelu administracyjnego Wordpress.

Bardzo duża ilość możliwych konfiguracji garażu uniemożliwiała skorzystanie z prostych form wizualizacji np. wgrania zdjęć różnych wersji garażu. Silnik konfiguratora Eurostal zbudowany został z wykorzystaniem biblioteki ThreeJS, która rysuje model 3D wykonując algorytm obliczający współrzędne. Oznacza to ze konfigurator nie potrzebuje wgrania gotowych zdjęć / renderów produktu - model 3D generowany jest w czasie rzeczywistym.

::::
:::

:::effect-appear
---
class: mx-default
---
#### **Wykorzystane technologie**
:::

:::effect-appear
---
class: mx-default
---
::::prose-figure{src="/img/content-images/case-eurostall-tech.png"}
---
class: hidden tablet:block
---
::::
::::prose-figure{src="/img/content-images/case-eurostall-tech-mobile.png"}
---
class: tablet:hidden
---
::::
:::
::

::ui-container
---
class: static-content mb-[50px] desktop:mb-[100px]
---
:::effect-appear
---
class: mx-default relative
---

::::svg-decorated
---
decoration: true
class: -bottom-6 -left-32
---
::::

### **Rezultat pracy**
::::prose-p3
Ostatnim etapem prac było wykonanie optymalizacji zdjęć które przyśpieszyło czas ładowania, dodanie prostego formularza kontaktowego oraz publikacja konfiguratora na kilku sklepach klienta.

W efekcie prac nasz klient otrzymał gotowy konfigurator produktu który może być dowolnie rozbudowywany, zarówno o funkcje sprzedażowe, jak i konstrukcyjne wpływające na wygląd i specyfikę sprzedawanych garaży - zastosowana technologia nie stawia ograniczeń. 
::::
:::
::


::ui-container
---
class: mb-[50px] tablet:mb-[100px]
---

:::effect-appear
::::prose-figure{src="/img/content-images/case-eurostall-img4.png"}
::::
:::
::

::ui-container
---
class: static-content mb-[50px] tablet:mb-[100px]
---
:::effect-appear
::::block-opinion
---
rating: 5
link: 'https://www.google.com/search?sa=X&sca_esv=950f1dd50efd152d&tbm=lcl&q=Webo+Opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NDA0NbQ0NLUwM7O0ANJGJiYbGBlfMXKHpyblK_gXZOZlpi5iReYBAMr9MB02AAAA&rldimm=1015191586698915244&hl=pl-PL&ved=2ahUKEwjvh8C7pfaOAxWRHxAIHUsvAXsQ9fQKegQISBAF&biw=1920&bih=1031&dpr=1#lkt=LocalPoiReviews'
avatar: '/img/content-images/eurostal_avatar.png'
---

#title
### **Opinia klienta**

#content

:::::prose-p3
Świetna współpraca przy tworzeniu strony i konfiguratora. Firma WEBO to **profesjonaliści, którzy dotrzymują terminów** i mają świetne podejście do klienta. Wszystko działa bez zarzutu, Polecam !

:::::

#author

#### **Dawid Jasek**

#authorTitle
:::::prose-p6
Sales Manager - **Eurostal**
:::::
::::
:::
::

::ui-container
---
class: mb-[50px] tablet:mb-[100px]
---
:::effect-appear
::::block-cta
---
button.link: https://webo.agency/kontakt/
button.title: 'Skontaktuj się'
---

#title
#### Zainteresowała Cię nasza oferta?

#description
Skontaktuj się z nami i rozpocznij współpracę

::::
:::
::

::ui-container
---
id: realizacje
class: mb-[80px] tablet:mb-[130px]
---
:::effect-appear
::::block-header
---
class: mb-10 tablet:mb-20
---

#subtitle
### *-/* Nasze ostatnie realizacje

#title
## Zobacz nasze pozostałe *realizacje stron www*

::::
:::

:::block-cases
---
contentFolder: realizacje
moreBtn.url: 'https://webo.agency/realizacje/'
moreBtn.linktitle: Zobacz wszystkie projekty
selectedSlugs:
    - isw
    - mutiny-group
---

:::
::

::ui-container
---
class: mb-20 tablet:mb-[130px]
---
:::effect-appear
::::block-header
---
center: true
class: mb-[50px] tablet:mb-[100px]
---

#subtitle
### *-/* Nasi klienci

#title
## Poznaj firmy które *nam zaufały*

::::
:::
:::block-brands-before-footer
:::
::