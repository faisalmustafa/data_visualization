Quantitative and Qualitative Data Visualization
================
Faisal Mustafa,
November 7, 2025 (Updated on November 07, 2025)

- [Quantitative Data Visualization](#quantitative-data-visualization)
  - [Factor Analysis](#factor-analysis)
- [Qualitative Data Visualization](#qualitative-data-visualization)
  - [WordCoud](#wordcoud)
  - [Linking Demographic Informatic with a Bipartite
    Chart](#linking-demographic-informatic-with-a-bipartite-chart)

## Quantitative Data Visualization

### Factor Analysis

## Qualitative Data Visualization

### WordCoud

WordCloud can be used to dhow the trend in the data. For this purpose,
let’s use the data that from ……

``` r
df_wordcloud <- read.csv("https://faisalmustafa.github.io/data_visualization/data/nguyen2026.csv")
```

``` r
head(df_wordcloud)
```

    ##                               Term
    ## 1            Culturally responsive
    ## 2 Culturally responsive sustaining
    ## 3         Intercultural competence
    ## 4         sociocultural competence
    ## 5                  Multicuturalism
    ## 6            Culturally responsive

Next, let’s create a frequency table based on the data, and remove
record containing *Not Applicable*.

``` r
library(dplyr)
tb <- as.data.frame(table(df_wordcloud$Term)) %>% 
  filter(Var1 != "Not Applicable")
```

``` r
head(tb)
```

    ##                                    Var1 Freq
    ## 1          Both Relevent and responsive    1
    ## 2                         Critical race    5
    ## 3                   Cultural competence   20
    ## 4                    Cultural interface    1
    ## 5 Culturally and linguistically diverse    1
    ## 6                    Culturally diverse   14

Now we are ready to create a Word Cloud based on the data. In this
instance, let’s use `wordcloud` package.

``` r
library(wordcloud)
```

``` r
wordcloud(words = tb$Var1 , freq = tb$Freq, scale=c(2,0.2), min.freq = 1,
          max.words=100, random.order=FALSE, rot.per=0.35,
          colors= RColorBrewer::brewer.pal(8, "Dark2"))
```

![](index_files/figure-gfm/unnamed-chunk-6-1.png)<!-- -->

To save the image into a file (e.g., PNG) and adjust its size and
resolution, enclose the above code with two lines below:

``` r
png(filename="wordcloud.png", width=30, height=30, units="cm", res = 600)

wordcloud(words = tb$Var1 , freq = tb$Freq, scale=c(2,0.2), min.freq = 1,
          max.words=100, random.order=FALSE, rot.per=0.35,
          colors= RColorBrewer::brewer.pal(8, "Dark2"))

dev.off()
```

### Linking Demographic Informatic with a Bipartite Chart

Bipartite Chart that we will use here is an interactive chart which can
show how one categorical variable links to categorical variable. It is
intended more for presentation, not publication, but it can be used for
publication is the figure chart makes sense to readers.

Let’s load the data which shows how terms are used in different
countries. The data is based on my own project.

``` r
df_bipartite <- read.csv("https://faisalmustafa.github.io/data_visualization/data/nguyen2026b.csv")
head(df_bipartite)
```

    ##   X Country                    Term  n
    ## 1 1     USA   Culturally responsive 65
    ## 2 2     USA     Culturally relevant 20
    ## 3 3     USA Multicultural education 15
    ## 4 4     USA     Cultural competence 13
    ## 5 5     USA      Culturally diverse  8
    ## 6 6 Germany   Culturally responsive  4

The package used to create this bipartite chart is called `bipartiteD3`.
Before creating the chart, we need to sort the **Country** and **Term**
in case we want to present the data in order of the frequency.

``` r
library(dplyr)

SortPrim <- df_bipartite %>%  # sorting for primary variable, in this case **Country**
  group_by(Country) %>%
  summarise(Total=sum(n))%>%
  arrange(desc(Total))

SortSec <- df_bipartite %>%  # sorting for secondary variable, in this case **Term**
  group_by(Term) %>%
  summarise(Total=sum(n))%>%
  arrange(desc(Total))
```

Furthermore, we need to manually create color for each value. We can use
the ready color palette but I like to use the color that I prefer.

``` r
ManualColors <- c(USA = '#E1712B', Turkey = '#16FD22', `South Africa` = '#0D16FF', Australia = '#37BC7D', `South Korea` = '#F700DD', Belgium = '#00D1FE', 
                  Germany = '#ECE600', UK = '#FE9200', Austria = '#1C762A', Finland = '#980049', France = '#6D2E8B', Indonesia = '#0DFBD8', Israel = '#6E4500', 
                  Malaysia = '#42707E', Norway = '#C62AFC', Norwegia = '#FE8FDB', Taiwan = '#FE0D91', Philippines = '#859AFE', Brazil = '#A7F47F', 
                  Canada = '#FEC77D', Chile = '#FF6365', China = '#D5C4FB', Ecuador = '#C2EAC7', Georgia = '#FF9898', Iceland = '#8B8B00', Isarel = '#915375', 
                  Italy = '#DD8CFF', Japan = '#ABE8F6', Kenya = '#16FEA0', Mexico = '#0D5695', Morocco = '#D40095', Nepal = '#7F8266', `New Zealand` = '#AB0DA1', 
                  Oman = '#7E38CA', Pakistan = '#AA4016', Samoa = '#00A08D', `Czech Rep.` = '#E7E5A0', UAE = '#FF6C9D' )
```

Now we are ready to generate the chart using the following code:

``` r
library(bipartiteD3)
```

``` r
library(bipartiteD3)
bipartite_D3(df_bipartite, colouroption = 'manual', 
             NamedColourVector = ManualColors, 
             ColourBy = 1,
             PercentageDecimals=1, 
             PrimaryLab = 'Country',
             SecondaryLab = 'Term',
             SiteNames = '',
             SortPrimary = SortPrim$Country,
             SortSecondary = SortSec$Term,
             MainFigSize = c(1000, 1500), 
             IndivFigSize = c(200, 1000),
             BoxLabPos = c(20, 20),
             PercPos = c(110,330),
             BarSize = 20,
             MinWidth = 10,
             Pad=5,
             filename = 'small1976Plot')
```

![](index_files/figure-gfm/unnamed-chunk-12-1.png)<!-- -->

<div id="bg">

<img src="https://faisalmustafa.github.io/data_visualization/img/bipartite.png" alt="">

</div>

<figure>
<img
src="https://faisalmustafa.github.io/data_visualization/img/bipartite.png"
alt="here" />
<figcaption aria-hidden="true">here</figcaption>
</figure>

Note that the `echo = FALSE` parameter was added to the code chunk to
prevent printing of the R code that generated the plot.
