function Pasos() {
    return (<>
        <div className="min-h-screen flex flex-col">
            <section className="flex justify-center items-center bg-white text-purple-700 min-h-[500px]">
                <div className="flex flex-col items-center max-w-3xl space-y-10">
                    <h1 className="text-6xl  font-bold text-center" >6 PASOS PARA SER VOLUNTARIO/A</h1>
                </div>
            </section>


            {/* Sección 1 */}
            <section className="flex justify-center items-center  text-white min-h-[500px]" style={{ backgroundColor: '#5C2D90' }}>
                <div className="flex items-center max-w-3xl space-x-10 ">
                    <img
                        src="/images/piensa.png"
                        alt="Manos sosteniendo agua"
                        className="w-40 h-40rounded-full mr-10"
                    />
                    <div >
                        <h2 className="text-5xl font-bold">1. PIENSA</h2>
                        <p className="mt-2 text-2xl">
                            ¿Qué te mueve?
                        </p>
                        <p className="mt-2 ">
                            Quizás sean tus ideas, tus valores, la solidaridad, la indignación ante la injusticia,
                            la necesidad de hacer algo útil, tu amor por la naturaleza o las ganas de cambiar el mundo.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección 2 */}
            <section className="flex justify-center items-center bg-white text-purple-700 min-h-[500px]">
                <div className="flex items-center max-w-3xl space-x-10">

                    <div>
                        <h2 className="text-5xl font-bold">2. MIRA</h2>
                        <p className="mt-2 text-2xl">
                            ¿Qué necesidades y problemas hay en tu entorno?
                        </p>
                        <p className="mt-2 ">
                            Esto es lo que quieres entender y resolver.
                        </p>
                        <button
                            className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700"
                            onClick={() => window.location.href = '/tipos'}
                        >
                            Descubre diferentes tipos de voluntariado
                        </button>

                    </div>
                    <img
                        src="/images/mira.png"
                        alt="Persona mirando"
                        className="w-40 h-40 rounded-full"
                    />
                </div>
            </section>
            {/* Sección 3 */}
            <section className="flex justify-center items-center text-white min-h-[500px]" style={{ backgroundColor: '#5C2D90' }}>
                <div className="flex items-center max-w-3xl space-x-10 ">
                    <img
                        src="/images/valora.png"
                        className="w-40 h-40rounded-full mr-10"
                    />
                    <div >
                        <h2 className="text-5xl font-bold">3. VALORA</h2>
                        <p className="mt-2 text-2xl">
                            ¿Qué puedes hacer tú?

                        </p>
                        <p className="mt-2 ">

                            ¡Millones de cosas!
                            Toda depende de tu disponibilidad, tus capacidades y tus intereses.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">
                            Descubre que hacen los otros voluntarios
                        </button>
                    </div>
                </div>
            </section>

            {/* Sección 4 */}
            <section className="flex justify-center items-center bg-white text-purple-700 min-h-[500px]">
                <div className="flex items-center max-w-3xl space-x-10">

                    <div>
                        <h2 className="text-5xl font-bold">4. CONTACTA</h2>
                        <p className="mt-2 text-2xl">
                            ¿Con qué organización quieres colaborar?

                        </p>
                        <p className="mt-2 ">
                            Hay muchísimas organizaciones que necesitan voluntarios/as com tú, sólo tienes que encontrar la que te enamore.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">
                            Encuntra y contacta con una ONG
                        </button>
                    </div>
                    <img
                        src="/images/contacta.png"
                        className="w-40 h-40 rounded-full"
                    />
                </div>
            </section>
            {/* Sección 5 */}
            <section className="flex justify-center items-center  text-white min-h-[500px]" style={{ backgroundColor: '#5C2D90' }}>
                <div className="flex items-center max-w-3xl space-x-10 ">
                    <img
                        src="/images/participa.png"
                        className="w-40 h-40rounded-full mr-10"
                    />
                    <div >
                        <h2 className="text-5xl font-bold">5. PARTICIPA</h2>
                        <p className="mt-2 text-2xl">
                            ¿Estás a punto para implicarte?

                        </p>
                        <p className="mt-2 ">

                            Comprométete, entusiásmate, trabaja en el proyecto que has escogido y disfruta de la experiencia.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">
                            Comparte tu experiencia
                        </button>
                    </div>
                </div>
            </section>

            {/* Sección 6 */}
            <section className="flex justify-center items-center bg-white text-purple-700 min-h-[500px]">
                <div className="flex items-center max-w-3xl space-x-10">

                    <div>
                        <h2 className="text-5xl font-bold">6. FORMATE</h2>
                        <p className="mt-2 text-2xl">
                            ¿Necesitas saber más?

                        </p>
                        <p className="mt-2">

                            Quizás el proyecto que has escogido necesita habilidades o conocimientos específicos. Fórmate para realizar mejor tu voluntariado.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">
                            Descubre cursos de ayuda
                        </button>
                    </div>
                    <img
                        src="/images/formate.png"
                        className="w-40 h-40 rounded-full"
                    />
                </div>
            </section>
        </div>
    </>);
}

export default Pasos;