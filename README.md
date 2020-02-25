<h1><span style="color: #5b1a88;">First Key Home - Nextjs project</span></h1>
<p>This repositorie its for the First Key Home project builded with <a href="https://nextjs.org/">Nextjs</a>, Wordpress and <a href="https://www.apollographql.com/">Graphql</a>.</p>
<p>It's using the Apollo Graphql Client for the static data queries and <a href="https://github.com/axios/axios">axios</a> for async and promise based requests.&nbsp;</p>
<p>It also uses <a href="https://chakra-ui.com/">Chakra UI</a> for the project structure and components.&nbsp;</p>
<p>Static content its being served from wordpress, the staging backend url it's not defined yet.&nbsp;</p>
<p>List of plugins used for the project are:</p>
<ul>
<li>
<p><strong>Advanced Custom Fields PRO</strong></p>
</li>
<li><strong>Yoast SEO</strong></li>
<li>
<p><strong>WP GraphiQL</strong></p>
</li>
<li>
<p><strong>WP GraphQL</strong></p>
</li>
<li>
<p><strong>WP-REST-API V2 Menus</strong></p>
</li>
<li>
<p><strong>WPGraphQL for Advanced Custom Fields</strong></p>
</li>
<li>
<p><strong>WPGraphql Yoast Seo</strong></p>
</li>
</ul>
<h2><strong>Project Structure</strong></h2>
<p>Right now the project structure its pretty simple, there is a Component folder that contains the layout file (layout.js). This template contains the &lt; ApolloProvider /&gt; wrapper for the whole app to make and accept the graphql queries and it also contains the chakra ui wrapper for the app theme &lt;ThemeProvider /&gt;</p>
<p>On the pages folder you can create any .js file that will be mapped with the same url name into the browser, example: about.js will be rendered on the url yourproject.com/about.</p>
<p>Theres a folder inside component's folder called queries where we should put all the components that contains a Graphql querie.&nbsp;</p>