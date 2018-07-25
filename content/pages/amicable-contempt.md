Title: Amicable Contempt: The Strategic Balance between Dictators and International NGOs
Date: 2017-08-23
Template: page
Slug: amicable-contempt
Github: True
Alias: /research/, /theory/

Over the past decade, international NGOs (INGOs) have become increasingly active in authoritarian regimes as they respond to emergencies, assist with development, or advocate for human rights. Though these services and advocacy can challenge the legitimacy and power of the regime, many autocratic states permit INGO activities and INGOs continue to work in these countries despite the sometimes heavy restrictions on their activities. In my dissertation, I theorize that this relationship between INGOs and autocrats creates a state of *amicable contempt*, where each party is aware that the other threatens—yet sustains—their existence. Autocrats and INGOs engage in a dance of cost-benefit calculus, each trying to advance their own agenda without upsetting their counterpart. Regimes work to set the optimal level of INGO regulations, maximizing the practical and reputational benefits that INGOs provide and minimizing the potential destabilizing costs of INGO activities. Meanwhile, INGOs work to find the optimal mix of programming within a country that allows them to pursue their principled objectives within the boundaries the regime has set—affecting as much change and providing as many services as possible without risking expulsion from the country.

Anti-NGO regulations are increasing worldwide and the space for civic space and associational life is contracting. But these new regulations have not completely ended global civil society—autocrats will continue to benefit from NGOs, and many NGOs will continue to adjust creatively to remain attractive and active. In this complicated state of amicable contempt, with both parties reacting and adjusting, who wins? When can regimes reap the benefits of INGO programming? What determines whether an INGO can avoid co-optation *and* remain actively engaged in a country? How do INGOs adapt? And how does this adaptation affect their strategies? Does it fundamentally change the organizations themselves, and can autocrats keep the upper hand?

---

The code for creating all the figures, tables, and analysis in the dissertation is available in a [version-controlled repository at GitHub](https://github.com/andrewheiss/Dissertation). Everything in the manuscript can be recreated using [R](https://www.r-project.org/), preferably within [RStudio](https://www.rstudio.com/), since the code is structured as an RStudio project.

<div class="pure-g" style="justify-content: center;">
  <div class="pure-u-1 pure-u-md-2-3">
    <div class="github-widget" data-repo="andrewheiss/Dissertation"></div>
  </div>
</div>

Each chapter of this dissertation examines a different aspect of the relationship between dictators and INGOs. The [full manuscript is available](/files/amicable-contempt_andrew-heiss_2017-08-22.pdf) and individual chapters are summarized below: <span id="theory"></span>

**Chapter 1: Introduction** ([PDF](/files/01-introduction_andrew-heiss_2017-08-22.pdf))

:   In this chapter, I introduce the theory of amicable contempt to conceptualize the dynamic relationship between dictators and international NGOs. 

    Play with the theory using the simulation below. Drag and slide the ideal points (which represent legislation for regimes and mission/vision/values for INGOs), and use the sliders to adjust the negotiation spaces (which represent the civil society regulatory environment for regimes and programmatic flexibility for INGOs).

    ---

    <p>
      <label for="width_regime" 
             style="display: inline-block; text-align: right">
             <em>De facto</em> regime openness:
      </label>
      <input type="range" min="29" max="600" id="width_regime">
      <label for="width_ingo" 
             style="display: inline-block; text-align: right; padding-left: 1em;">
             INGO programmatic flexibility:
      </label>
      <input type="range" min="29" max="600" id="width_ingo">
    </p>
    <div id="simulation"></div>

    ---

    The relationship between INGOs and authoritarian regimes is dynamic, and shifts in INGO programmatic flexibility and de facto regime civil society regulations can lead to a variety of practical operating environments:

    ![Possible regulatory environments and regime–INGO relationships](/files/img/theory-grid.png){.pure-img-responsive}

<script src="/files/js/d3.v3.min.js"></script>
<script src="/files/js/theory.js"></script>

**Chapter 2: Authoritarian Institutions and Restrictions on International Civil Society** ([PDF](/files/02-cs-regime-stability_andrew-heiss_2017-08-22.pdf))

:   I use Bayesian statistical analysis with a cross-sectional dataset of 97 autocracies to explore the determinants of authoritarian civil society restrictions, testing the effect of a regime's concerns of internal stability, external stability, and international reputation on its civil society regulatory environment (or CSRE). I find that autocracies constrict civil society regulations in response to domestic instability and as regimes become more stable and cohesive. I also find that autocracies constrict civil society regulations in response to external threats to the regime, including the pressures of globalization. I find no evidence of an effect from reputational concerns.

**Chapter 3: INGOs and Institutional Balancing in Egypt, Russia, and China** ([PDF](/files/03-country-case-studies_andrew-heiss_2017-08-22.pdf))

:   Based on the statistical results from the previous chapter, I conduct model-building small-*n* case studies of Egypt, Russia, and China. I first present a timeline that overlays changes in each country's internal, external, and reputational trends with each country's civil society regulatory environment, key NGO-related regulations, tenures of heads of state, and potentially destabilizing events such as wars, revolutions, and conflicts. I then rely on secondary sources, existing data, and US State Department diplomatic cables from Wikileaks to trace the role of internal, external, and reputational concerns individually in the development of NGO-related laws over time. I conclude with a comparison of all three countries and a discussion of how the small-*n* analysis complements and expands the large-*n* analysis from the previous chapter.

**Chapter 4: "We changed our strategy… without losing our values, vision and mission": Mission, money, and the practical operating environment** ([PDF](/files/04-ingo-mechanisms_andrew-heiss_2017-08-22.pdf))
:   I use evidence from a global survey of international NGOs to define each INGO-related element of the theory of amicable contempt. I find that INGOs are primarily motivated by their core vision and values, but that they have to balance the pursuit of their missions with instrumental concerns such as fundraising, time, staffing, and collaboration. These concerns both limit and enable INGO activities—without substantial instrumental resources and programmatic flexibility, organizations are unable to carry out their mission, while too much emphasis on resource concerns distracts organizations from their core programming and reduces their effectiveness. 

    Amid this internal struggle between mission and money, I then introduce how the civil society regulatory environment of INGO host countries is designed to target each element of this struggle. Gatekeeping regulations limit which organizations are allowed to enter the country and constrain the flexibility of organizations already present in the country. These regulations are primarily defensive and are designed to protect the regime against the potentially destabilizing effects of INGO advocacy and service provision. Program capture regulations, on the other hand, are more offensive and target organizational missions instead of their flexibility. These laws are designed to co-opt and reshape INGO programming to fall more in line with government preferences, allowing regimes to take advantage of INGO activities. 


**Chapter 5: "They do not want us to operate there": INGO responses to gatekeeping regulations** ([PDF](/files/05-gatekeeping_andrew-heiss_2017-08-22.pdf))

:   In this chapter, I combine survey data with case studies of Article 19 and AMERA International to examine how INGOs draw on their flexibility to respond and adapt to gatekeeping regulations.

**Chapter 6: "Some state officials want your services": INGO responses to program capture regulations** ([PDF](/files/06-program-capture_andrew-heiss_2017-08-22.pdf))

:   In this chapter, I combine survey data with case studies of Index on Censorship and the International Republican Institute (IRI) to examine responses to regulations designed to capture, change, and take advantage of NGO missions. 

**Chapter 7: Conclusion** ([PDF](/files/07-conclusion_andrew-heiss_2017-08-22.pdf))

:   I conclude with an overview of the argument, summary of the evidence, and discussion of the implications of the findings for political science and public administration theory and NGO management practice.

**Appendices**

:   - Methods appendix ([PDF](/files/08-methods-appendix_andrew-heiss_2017-08-22.pdf))

    - Results appendix ([PDF](/files/09-results-appendix_andrew-heiss_2017-08-22.pdf))

    - Bibliography ([PDF](/files/10-bibliography_andrew-heiss_2017-08-22.pdf))
