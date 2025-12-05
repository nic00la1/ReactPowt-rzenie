import React from 'react'

export const ControlPanel = ( {showAnimals, setShowAnimals, showButtons, setShowButtons, showPanel, setShowPanel} ) => {
  return (
    <div>

        {/* Przycisk, który ukrywa sam siebie */}
        <button onClick={() => setShowPanel(!showPanel)}>
            {showPanel ? "Ukryj panel" : "Pokaż panel"}
        </button>

        <button onClick={() => setShowAnimals(!showAnimals)}>
              {showAnimals ? "Ukryj listę zwierząt" : "Pokaż listę zwierząt"}
            </button>
            <button onClick={() => setShowButtons(!showButtons)}>
              {showButtons ? "Ukryj literki" : "Pokaż literki"}
            </button>
    </div>
  )
}
