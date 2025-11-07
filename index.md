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

Note that the `echo = FALSE` parameter was added to the code chunk to
prevent printing of the R code that generated the plot.
