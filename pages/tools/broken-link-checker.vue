<template>
  <div>
    <TopSection
      title="🔗 Broken link checker"
      sub-title="Find broken links using this finder tool. It will help you if you are doing broken link building."
    ></TopSection>
    <EnterURLSection></EnterURLSection>
    <!--<LoadingAnimation></LoadingAnimation>-->
    <BrokenLinkCheckerResultsContainer></BrokenLinkCheckerResultsContainer>
    <InformationBox
      class="information-box"
      title="❓ Why bother checking for broken links?"
    >
      <p style="opacity: 0.56">
        Checking websites or blogs for broken links can be useful for following
        scenarios:<br /><br />
      </p>
      <ul style="list-style-position: inside; opacity: 0.56">
        <li>Improve SEO</li>
        <li>Improve user experience</li>
        <li>Do <u>broken link building</u></li>
        <li>Get yourself new backlinks</li>
      </ul>
    </InformationBox>
    <InformationBox class="information-box" title="🤷‍♂️ How to use the tool?">
      <p style="opacity: 0.56">
        Using this tool is very easy. Here are the steps you may go through:<br /><br />
      </p>
      <ul style="list-style-position: inside; opacity: 0.56">
        <li>Enter your domain or URL and click “Check broken links”</li>
        <li>After a short moment you'll receive your results</li>
        <li><img /></li>
        <li>You can now go ahead and fix these links</li>
        <li>
          If you want to save them for later, you can export them like this:
        </li>
        <li><img /></li>
      </ul>
    </InformationBox>
    <InformationBox class="information-box" title="🤖 How does this tool work?">
      <p style="opacity: 0.56; max-width: 80%">
        This tool basically visits the domain/URL you've entered, finds all
        links on that page and goes deep.<br /><br />
        It starts visiting all these links, finds all links on these pages and
        goes deep again. <br /><br />
        This way I can assure, that you'll get the most out of this tool. <br />
        Other tools often only check the first page you enter for broken links,
        this one goes through many more pages on your website without you having
        to do anything for that.
      </p>
    </InformationBox>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.information-box {
  margin-top: 5rem;
}
</style>
