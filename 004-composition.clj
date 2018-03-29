;                 1
;              -------
;              1 + x^2

(def reciprocal (partial / 1))
(defn square [x] (* x x))

; (defn fn [x] (reciprocal(inc(square(x)))))

(def fn (comp reciprocal inc square))

(print (fn 3))
