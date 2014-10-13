(defproject acme "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.2.0"]
                 [ring/ring-core "1.3.1"]
                 [ring/ring-json "0.3.1"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [cljs-http "0.1.17"]
                 [om "0.7.3"]
                 [com.facebook/react "0.11.2"]]

  :plugins [[lein-ring "0.8.12"]
            [lein-cljsbuild "1.0.3"]
            [lein-pdo "0.1.1"]]

  :ring {:handler acme.handler/app}
  :profiles

  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]]}}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}]}

  :source-paths ["src/clj"]
  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]})
