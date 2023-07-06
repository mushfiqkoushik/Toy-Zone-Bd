import Title from "../components/Title";

export default function Blogs() {
  return (
    <div>
      <Title  match={"Blogs"}/>
      <div>
        <div className="container mx-auto text-justify px-4">
          <h1 className="text-4xl font-bold mb-10 mt-24  text-center">
            QUESTION & ANSWER
          </h1>

          <p className="text-2xl font-bold mb-5">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </p>
          <p className="text-xl font-semibold mb-5">
            ANSWER: <br /> An access token and a refresh token are both used in{" "}
            <br />
            authentication and authorization systems to grant and manage access
            to protected resources. Here's an explanation of each token and
            their typical usage: <br />
            Access Token: An access token is a credential that is issued by an
            authentication server to a client application after the client
            successfully authenticates itself. The access token represents the
            client's authorization to access specific resources <br />
            or perform certain actions on behalf of the authenticated user. It
            is typically a string of characters that is included in each request
            to the server to access protected resources. <br />
            Refresh Token: A refresh token is also issued by the authentication
            server, but it has a different purpose. While an access token has a
            limited <br />
            lifespan, the refresh token is a long-lived credential that is used
            to obtain new access tokens when the current one expires. The client{" "}
            <br />
            application can send the refresh token to the authentication server
            to obtain a new access token without requiring the user to re-enter
            their credentials.
          </p>
          <p className="text-2xl font-bold mb-5">
            {" "}
            2.Compare SQL and NoSQL databases?
          </p>
          <p className="text-xl font-semibold mb-5">
            ANSWER: <br />
            SQL (Structured Query Language) and NoSQL (Not only SQL) are two
            different types of database management <br /> systems with distinct
            characteristics. Here's a comparison between SQL and NoSQL
            databases: <br />
            <p>
              Data Model: <br />
              SQL: SQL databases use a structured data model based on tables
              with predefined schemas. They enforce strict data consistency and
              provide support for relationships between tables (joins). <br />
              NoSQL: NoSQL databases use various data models, such as key-value,
              document, columnar, or graph-based. They offer more flexibility in
              terms of schema design and can handle unstructured or
              semi-structured data more easily.
            </p>
          </p>
          <p className="text-2xl font-bold mb-5">
            3. What is express js? What is Nest JS?
          </p>
          <p className="text-xl font-semibold mb-5">
            ANSWER: <br />
            Express.js and Nest.js are both popular web application frameworks
            for building server-side applications with Node.js. Here's an
            overview of each: <br />
            Express.js: <br />
            Express.js is a minimalistic and flexible web application framework
            for Node.js. It provides a simple and unopinionated way to build web
            servers and APIs. Express.js offers a lightweight core that allows
            developers to add additional <br />
            functionality through middleware and extensions. It provides
            features like routing, request/response handling, and template
            engine integration. <br />
            Nest.js: <br />
            Nest.js is a progressive, opinionated framework for building
            scalable and maintainable server-side applications with Node.js. It
            is built on top of Express.js and provides an additional <br />
            layer of features and abstractions. Nest.js follows the principles
            of modularity, dependency injection, and strong typing, inspired by{" "}
            <br />
            Angular (a popular frontend framework).
          </p>
          <p className="text-2xl font-bold mb-5">
            {" "}
            4.What is MongoDB aggregate and how does it work?
          </p>
          <p className="text-xl font-semibold mb-10">
            ANSWER: <br />
            In MongoDB, the aggregate function is used to perform advanced data
            processing and analysis operations on collections of documents. It
            allows you to perform complex aggregations, transformations, and{" "}
            <br />
            computations on the data stored in your MongoDB database. The
            aggregate function takes an array of stages as its argument, where{" "}
            <br />
            each stage represents a specific operation or transformation to be
            applied to the data. <br />
            Pipeline Stages: The aggregate function operates on a collection and
            processes the documents through a series of pipeline stages. Each
            stage defines a specific operation to <br /> be performed on the
            data. The stages are executed sequentially, and the output of each
            stage becomes the input for the next stage. Common Aggregate Stages:{" "}
            <br />
            MongoDB provides a set of common stages that can be used in the
            aggregate pipeline. Some of the commonly used stages include:
            $match: Filters the documents based on specified conditions. <br />{" "}
            $group: Groups the documents by a specified key and performs
            aggregation operations (such as counting, summing, averaging) on
            grouped data.
          </p>
        </div>
      </div>
    </div>
  );
}
