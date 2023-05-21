import React from "react";

const Blogs = () => {
  return (
    <div className="my-10 space-y-6 mx-3">
      <div className="relative">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col overflow-hidden rounded text-center">
          <a
            href="#"
            className="mx-auto mb-2 inline-block max-w-3xl text-xl font-semibold transition duration-500 ease-in-out hover:text-indigo-600 sm:text-4xl"
          >
            Compare SQL and NoSQL databases?
          </a>

          <a href="#">
            <img
              className="my-4 w-full"
              src="data:image/png;base64,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"
            />
          </a>

          <hr />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mt-3 flex flex-col justify-between rounded-b bg-white leading-normal lg:rounded-b-none lg:rounded-r">
            <div className="">
              <p className="my-5 text-base leading-8">
                SQL (Structured Query Language) and NoSQL (Not Only SQL)
                databases are two different types of database management systems
                that serve distinct purposes and have unique characteristics.
                <br />
                <br />
                SQL databases are based on a structured, tabular model that
                organizes data into tables with predefined schemas. They follow
                the ACID (Atomicity, Consistency, Isolation, Durability)
                principles and use SQL as the query language for data
                manipulation and retrieval. SQL databases are suitable for
                applications that require strict data consistency and complex
                joins, such as financial systems or enterprise applications.
                <br />
                <br />
                On the other hand, NoSQL databases offer a flexible, schema-less
                approach to data storage. They use various data models,
                including key-value, document, columnar, and graph, depending on
                the specific database. NoSQL databases prioritize scalability,
                high performance, and flexibility over strict consistency. They
                are well-suited for handling large volumes of rapidly changing
                data and distributed systems.
                <br />
                <br />
                When it comes to data modeling, SQL databases enforce a rigid
                structure and require predefined schemas, making them suitable
                for applications with stable data requirements. NoSQL databases,
                on the other hand, allow for dynamic and evolving data
                structures, making them more adaptable to changing business
                needs.
                <br />
                <br />
                SQL databases excel in complex queries and support advanced
                functionalities like transactions and referential integrity.
                They ensure data integrity through rigorous constraints and
                validations. NoSQL databases prioritize scalability and can
                handle massive amounts of data with high throughput and low
                latency. However, they may sacrifice certain consistency
                guarantees.
                <br />
                <br />
                In terms of scalability, SQL databases often scale vertically by
                increasing hardware resources, while NoSQL databases are
                designed to scale horizontally by distributing data across
                multiple servers.
                <br />
                <br />
                Choosing between SQL and NoSQL databases depends on various
                factors, including the specific requirements of your
                application, data consistency needs, scalability requirements,
                and development flexibility. Both types have their strengths and
                weaknesses, and the choice should align with your project's
                goals and constraints.
                <br />
              </p>
              <p className="my-5 text-base leading-8">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col overflow-hidden rounded text-center">
          <a
            href="#"
            className="mx-auto mb-2 inline-block max-w-3xl text-xl font-semibold transition duration-500 ease-in-out hover:text-indigo-600 sm:text-4xl"
          >
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </a>

          <a href="#">
            <img
              className="my-4 w-full"
              src="data:image/png;base64,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"
            />
          </a>

          <hr />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mt-3 flex flex-col justify-between rounded-b bg-white leading-normal lg:rounded-b-none lg:rounded-r">
            <div className="">
              <p className="my-5 text-base leading-8">
                Access tokens and refresh tokens are important components of
                authentication systems like OAuth 2.0. They serve different
                purposes and work together to secure client requests to
                protected resources.
                <br />
                <br />
                An access token is a short-lived credential granted by an
                authorization server after successful authentication. It
                contains user information and permissions. The client includes
                the access token in each request to access protected resources.
                The server verifies the token to ensure the client is
                authorized.
                <br />
                <br />
                On the other hand, a refresh token is a long-lived credential
                obtained during authentication. It allows the client to request
                a new access token without requiring the user to reauthenticate
                when the current one expires. This helps provide a seamless user
                experience.
                <br />
                <br />
                To store these tokens on the client-side securely, it's crucial
                to follow best practices:
                <br />
                <br />
                Access Token Storage:
                <br />
                Store the access token securely, such as in an HTTP-only cookie
                or browser's local storage. This helps protect against
                unauthorized access. However, using an HTTP-only cookie is
                generally more secure, as it prevents client-side JavaScript
                from accessing the token directly and reduces the risk of
                cross-site scripting (XSS) attacks.
                <br />
                <br />
                Refresh Token Storage:
                <br />
                Keep the refresh token more secure. Store it in an HTTP-only
                cookie or on the server-side in secure storage. This prevents
                client-side JavaScript from accessing the refresh token
                directly, minimizing the risk of theft through XSS attacks.
                <br />
                <br />
                By implementing these practices, you can enhance the security of
                access and refresh tokens in your client-side application.
                Always consider the specific security requirements and
                recommendations of the authentication system you are using.
                <br />
              </p>
              <p className="my-5 text-base leading-8">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col overflow-hidden rounded text-center">
          <a
            href="#"
            className="mx-auto mb-2 inline-block max-w-3xl text-xl font-semibold transition duration-500 ease-in-out hover:text-indigo-600 sm:text-4xl"
          >
            What is express js? What is Nest JS?
          </a>

          <a href="#">
            <img
              className="my-4 w-full"
              src="data:image/png;base64,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"
            />
          </a>

          <hr />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mt-3 flex flex-col justify-between rounded-b bg-white leading-normal lg:rounded-b-none lg:rounded-r">
            <div className="">
              <p className="my-5 text-base leading-8">
                Express.js is a popular web application framework for Node.js.
                It provides a simple and flexible way to build web applications
                and APIs. Express.js is known for its minimalist approach,
                allowing developers to create robust and scalable applications
                with ease. It offers a wide range of features and middleware
                that simplify common tasks such as routing, handling HTTP
                requests and responses, managing sessions, and serving static
                files. Express.js is highly extensible, allowing developers to
                integrate additional libraries and tools to enhance
                functionality as per their requirements.
                <br />
                <br />
                NestJS is a progressive TypeScript-based web application
                framework built on top of Node.js. It is designed to make the
                development of scalable and efficient server-side applications
                more structured and maintainable. NestJS takes inspiration from
                Angular and uses a modular approach with decorators, dependency
                injection, and TypeScript decorators to organize and build
                applications. It provides a solid foundation for building
                scalable and loosely coupled applications, allowing developers
                to easily manage complex workflows, handle authentication and
                authorization, and implement various architectural patterns.
                NestJS offers out-of-the-box support for features like routing,
                validation, logging, and error handling, making it a popular
                choice for building enterprise-grade applications. Its modular
                architecture and TypeScript support enable code reusability and
                enhance developer productivity.
                <br />
                <br />
              </p>
              <p className="my-5 text-base leading-8">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col overflow-hidden rounded text-center">
          <a
            href="#"
            className="mx-auto mb-2 inline-block max-w-3xl text-xl font-semibold transition duration-500 ease-in-out hover:text-indigo-600 sm:text-4xl"
          >
            What is MongoDB aggregate and how does it work?
          </a>

          <a href="#">
            <img
              className="my-4 w-full"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT0AAACfCAMAAAC85v7+AAAA/FBMVEUAHisAaEoAHCoHZ0wdbVUdMj0AGigA7WQ6SVIAa0sAACcAFSgAGioAZkkA9mcAACgACR0AFCQAYkEAQDiFnZ6FuKkAFSoAMzMA8mYA+WgAABoADSkAACQADykAjUeTqKgA42EAUzgAABUAABEA218AZTwAVzcA6GMAyVkAt1MA/2oADR8AXUUArFAAlkkAwlcAekEAJC0AgkScs7MAOzZOYWYAVUEATD0AQDJqfoEAoE0ALi8AYzt5jo8AKzAAAAopPEQAcT9HWl8A0VwApU5CgmuVw7Z2qZk6R1EeX1AnOkJyh4mnwL9gc3cPKDQASjRKinRjnImkz8MTSEFH6EVYAAAO7UlEQVR4nO2dCVvayhrHw6CJJMMkIIVsEARkEUE2laVQFq33tlbrPd//u9yZhFWF7J7E9v8850ggpObnu82bZIY6MdFUm5rtYklT7T/mO/3nv0ehEkUfFqxrBZNdrKlg6TjwMhYJj6KUiRKD64TZPlZEn4zrFnYDocJnSk/WBOABPKo+PqGt7AfgTXjwmdueJrtHh1XoFqztCLjb0OAzo1f/WMfVxfXiIeFnRq/QLbrkZkjWnqwHAEiFxHtN6CXmPy2bzCEBylYAAFwmGgZ+JvSKXcEVtZVk7YelnLEWzZ2GgN9heolrj0zvyX7ugVzvJhZwgIfpFR+9SbjFro2otxbNUac38ViAER6kJ4y9SbiJ67GzAAAgR09Ob28uo3FPFIlHPP1jHKJHH2sWazQT1R9dJG5AQ8h5JAjao97tZcQrggfoAc/8VptCTw7kgQD+Y3Awc+tNRXmAXlGbe+K38mDgTeL2TjgiZLwYT++nJw9+emJ69bnmTcHtrWhu4r4k30tPuE55ctKJabfoSZvBcwFu5Nb+9tGrz70ZoiWmj95kHj8EuFN3+PbQE+bdb178fvXpoxxMyzME267M7316hV+aJ/Dk626g4bltJ75HDxTHYy/cFh/Hm9jpp1y1E9+hV6cfr72IVXXQ/RV4eFhc3zG+N/To4q/ukwetAfrbr8djT1oMvsu59b2iB+Rpd/DNfaiChZPuoGivKfXvyTG+HXq0fKxplHuDSRTm3VQ9HIani3OYeTf0gCCfaNqx2xwJ6jI96I7poA3ODgpQcRf06LogH6e6Y8oFOwATCUGQn35q2nWhHuw65Y1gxpHxRSlBFuTpQNNSUyfnDOvk+/Wndvv45HqQwoeZFwRPmgsfK85R2RelUlpKG89pWbAd4+m6nJiPyfe1VCo1/jk4earLQmCaUbbkzHejVILYjoNTThR+jDVtcIK5ywJWvZ6AIfPXbUEnQ17TewneFxCEQTd1Igv1sFQlpoIOjM8ZPQGmutfFkDrpHjkxPif0EvK4Oy2EMDUcFvwI2wPF68d54dM47EbQ/ojDNr1EQhuHZghmS2DkOz3h5HEaqmGEDXG284ZNeoWB9jkNj8h+o9QeveJ47EnPOZiie77SK6YGwb3E416g7Se9Tw7PQcFsg15h/MnhUdylb/TqHl0eD7Bspw3L9Ohjb67wBlm262XL9AqPiRB3UKzJ9lDXKj055c0NVYGWX/ToqUc3QgZaftErdj+/3/pGz6t75wMun+hZfsgs3PKH3h9iej7R8+phtaDLF3r0j9Rnbentyhd6Qmr6aXt6O/KFnvxn5Ax/6NFT6w8mh1t+0Kv/tDajQPjlBz1BC9sdUU7lBz3Zo3kdgi8f6AHqD6lXfKEH54M/JGn4QS8xmP8hScMPekLqh7ukAUJzq5Uv9JzMKbARaPc5N9//QPlCz92vpNZKbEgqHl/oufI8toNQg3VzhI+TL/TcXA7KlhHDoE448AWNHmxXGCx0lnZ+jI9T0OipVZHQYyqhCH0Bo6d2kA6PEUMR+oJFD2aZldBzCMqWYNHjh+KKnngVAuMLFD2gMEyojC9Q9JQW2tATG7zxLuCxtlKwurtp/1/hdalpsDkekWK/TA0UPfZK3DK+vJF2QbvWuGuU17z44d1dbeYcn5Jr3N01Go3hucKTfyB7Z2zfdUa2Y0WQ6AGlYnArGa5rDHdBO5cXUXV1ZukzSUTDsnOvTs8WSKxUq5ULpsljc0t38OHz1WpeQkO7+IJED/YNxxWrBr1WVn8bqDVxhRLbJ95gVDchkT1DaMSybHkhldoYH5tDFbzJnotS0ya+INFLJw16ecOBxZxivM/WSnnxzjgxui3mt0pp8Kqm3tne/XC9xWF6WUCBNHuFSD9CyaE8PjhgccJX7NXoQaKXnRn0Skt6K0dia4umyGT1E1NyUlNc0kuzLOTZ5QlnWUjr28uIyOkbRCQZQJZV8H+6yRJ6esaAagU11RU9KnuOUN9e5ggSvfS5QW9RM+jhM9OFbY9DqKNbopqvYsY6PbZ8JUpSKaczYWeLEVcTJbQo6/sppzXyYbW6WPQglQbDvCSJtWeSxtf0KL6JKjxY0cMZH7XDS497NuhVGwa9zsZz1SuxRM4wfX5x3jLosU2Jac461YvSiKP42gXqVEqdWQPpDYbsV1FqzDollO8MezD9XJGuWrOhqPduNvS4PkLlNKGnclxavUJ2K/Qg0YPtZdIwRhxoVaUQel8NKuxVRTXoKR0p32azijqUSjwA2O5QTVWyao0goNs456hZhS2hoQppqiJ18Gdsj5HO01v0cHWOTZrQG/X7ZfxNm2GPogNEj2IXBr2mUfZxy3PB9Fi2JNZYCmZwWmzhFAkAz6AksU2gliScXngSGaHu/dgNlQ4qEbdXZmRf/g5d6UGAx2+z2/T4PK5SlJwoXmBJTI7K2vuFbT+o5ic9Vccm1nLGj5UbsVclfIoIAZofSoAEdx7gDLOsptUcWrD4q4bb4byN6RFeZIu4Zg+yeTTTsUDAoDNuix7+pKkS24O9TO/8ShLL9vAFih7M6NgaOj30dTWeIPQgZFCTZ5kam9bpYVrLAhpvV/TtxoYe3loQa0uXEUNBSlyNmdU8LiK36HHi0nNVCCH2erGSteW7wO6cNr72WPRSWLzTh7ubS0OEHsU2xLzaujhLG/RW1oUJfX1LD+cf1FcB1KMgPVnTw3Gwo2zo4a9KfW6VcynuFKFzW0NAMAkSPdgm9Iak7pM2I1udnp4fFziaGfQUPYQR4ULDsLYtejgho8o5O2pITAYCXlwmIMAyGM+GHv5j4YOs6QF+VRdZle1HTP3tLbMdhOs8XPdtX1bT6VFsVSyhlrKkB3uSONGLM7aGGvxrejiXIJIJrkZ6ol6OYNNnSOTAmp5yhiQcHtb08McYblqx4b3A5iOmPl/XwCzEZhmJ25d0DXo4T4gVFej08Id4x5oKAWCxTeIx8JpeGQcx/JWG9PV5dk6paf09iZkouKpRq9LQyLk8B9PsWYVsUpu4VxXzSvo816Es44PRQNEDfFVqPeNSblP045POY2okQQ7xWIEl9BSKBnmpMeGVWUVqYQTq0KhK8KcVlsvOpEWr02p1vo6WhXW+zPO9K2nBA7KL2Jn0zmsSaupmeicy5VGmN1tIzFkatK7Orfe/7D6g6/f1XMhWa7n8aPP7c2cMQiKGoDYv8KCLlC4iaSBwoCZJFeYif87qzimSwgV/KiKmj4dgjER0gWqkAmZblQumIqE7labUO4SQXt7V+gReuirp2+SNDA4MndzQ+mjX7iOmftPDY/eSqGx1oED7ud9/huTFTCFFQh9vZjASmh21mrkyS0o0MJm0JxMa74N/jrA9XUnNHt6vtQygCvs115y1iSFyZ2Vdp8umASwv1dcbCiD7dWS9/2V3qOY7PWxH+Z3hJiBLNegv0utNIzDhUKUsjRSQZf2WP2kq25JqKtmPZCE9goK0omSNG+O4tK71/GvL7fUbnI1OwaGCLx4hC3S8pmcWUt3S4xslt5fT2CrJzpRe0TF+XpsD4B168SRW5Oj+/vfv3/f3RxGymYwv6bVN8LmlpwxdX4zE9IbE5IDasN03safXaQNzOvr98P3L9y8PDw8vLy/4/1/I1suRTjBKXZrMOeiWHpW22+p4I+y54kxlWTwurmR8vZdyZ14HbHEv35ekDIOLL19EMdHvD0fJOBW7fN0P35VretbLrb1ic+iCWZSki9rE39uJNj2qeDKKCf1eO+lbb77HNkhFYtGDLVj39DwQS7XuGsNWm/X5Lt7VWC2ZxFZ3/z65LYJHFHlxyu23j0DQo+gsz7NZ/28/58hoIxl5+P6C/dZUUZ1e7HKyl18w6H2UcL2cTH7BZmdpxGvQw/xuJtz76ePPogdGyYf/3Vswux16kVjs8rTNQUjTYFdyitt6698+O58FCvP//bbKboueDjB6c3uaeaVRarR6icdPeGgA6U/LkEwL2rfMbpeeQfC1kl+2t+LRy9vTCdzj5SFXYf44le3MPvqa3lslv7wKoIThDfHyTwYQfEulirStLpUDekuEl6fUgTonfKIFY0EgO30Wp/R0gDejz8Mv8ePxWC8ugCkRT+jpBpj5JPzq80d5WYvbaJG6okcAXn4K+xOuN+s12riy5pYeqbPD8wjpPgnX26vvWV+pxD29SCzSC7n51ec7SxdavyjuAT3d/ML8+Hji5NWUqpaNzxN6kVh8El7vpY9fL7NqOfJ5Qw/z6wX/YZY9kh/fDN+tpl2v6EVityHF96178qaJBGhrt2R4Ri+s+IR3VzWH1u7k845eOPHR0/dnZrS2NqKH9EKJr/D4/kRH1sZrXtILIT5hfL2nc27Jdz2lF4mdhqtwoY+1vTOqWin6vKUXiY1CVTYXu/tn6gG0+c18HtOLxD249v1hSszHB6Z3szBg85pe7DJEoa/YPTizoHno85pemEJf4tpkbjzTFbE9pxeJmN2UFRiZT8Jtljm8pxe7CYnvwrn5XL4mRbMPthfLhCPvyl3zOS0BPIjPB3qRcCQO8KRZmE8V0Ifw+UEv1guD8dXHJ1by20Hr84NeJBoG47O6ZsghfL7QC4Px0SdW538H+zOvL/TCEPnqY+sLN3D9Pfj8oRebBL7mszWDObfnOQ6f6N0GfcABKCsZdy3Yfjf4+UMvEg86vcSvX7ZuiQXvXijyiV4sE3DXFVJ2m0FcJvKGn1/0gu66DhZuoMGb3OsTvcBnXSfLXgAuE93l5xe9WLA7LeDJ0bIXNHe6476+0Qt2wWw3aawFqdstflboOYAX9MBXHztduAHA9oafX/QCHvhkW9XergAE/XjMMr0jJ/TigaYnuKBH+HGZm1jMEr2He0eBL9DPFQlu10qiufbpZcwCvZcX648ebdEL9FDXg3W6sAG2/zGlF79/cEQv0KMNb1Y5A8fmd7skvzuiF+iSJfD0An1d9wPpOUq6f+kZiv9++XR9go+jF4k4cd2/9JZyFPj+eu6KnpOK7y+9NT4Hxve3YlnT+3Jk/5ru32p5LfvGF+z26IfSc2B8sUD3WD7W9uwbX7DvZflYeskHG3O86LrhQICF6XlxmGMqaknJ73FrO670z3GQ9aQ9eXGY6f8BNEPPTr3cFb4AAAAASUVORK5CYII="
            />
          </a>

          <hr />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mt-3 flex flex-col justify-between rounded-b bg-white leading-normal lg:rounded-b-none lg:rounded-r">
            <div className="">
              <p className="my-5 text-base leading-8">
                MongoDB's aggregate is a powerful method used to perform
                advanced data aggregation operations on collections of
                documents. It provides a flexible and efficient way to process
                and analyze data within the database.
                <br />
                <br />
                The aggregate operation in MongoDB allows you to perform various
                data transformation tasks, such as filtering, grouping, sorting,
                joining, and computing aggregate values. It enables you to
                perform complex queries and data manipulations in a single
                operation.
                <br />
                <br />
                The aggregate pipeline is the core concept of the aggregate
                operation. It consists of a sequence of stages, each
                representing a specific data processing step. Each stage takes
                the input from the previous stage and performs a specific
                operation on the data, passing the results to the next stage.
                <br />
                <br />
                Some common stages in the aggregate pipeline include:
                <br />
                $match: Filters documents based on specified criteria. $group:
                Groups documents by a specified key and performs aggregate
                calculations on grouped data. $sort: Sorts documents based on
                specified fields. $project: Shapes the output documents by
                including or excluding specific fields. $limit: Limits the
                number of documents returned by the pipeline. $unwind:
                Deconstructs an array field into multiple documents, creating a
                separate document for each array element.
                <br />
                <br />
                By chaining together these stages, you can create complex data
                processing pipelines tailored to your specific needs. The
                aggregate operation in MongoDB leverages the database's indexing
                capabilities, resulting in efficient and performant data
                processing.
                <br />
                <br />
                To use the aggregate operation, you provide an array of stages
                to the aggregate method in MongoDB. Each stage represents a step
                in the data processing pipeline. The database executes these
                stages sequentially, transforming the data based on the
                specified operations.
                <br />
                <br />
                The aggregate operation is particularly useful when dealing with
                large datasets or when you need to perform complex data
                transformations and calculations within the database itself. It
                provides a flexible and efficient way to aggregate and analyze
                data, making it a valuable tool in MongoDB's data processing
                capabilities.
                <br />
              </p>
              <p className="my-5 text-base leading-8">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
