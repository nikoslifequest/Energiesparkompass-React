import { forwardRef } from 'react'
import { Button, Badge, Icon } from './index'

const ModernHero = forwardRef(({ 
  badge,
  title,
  subtitle,
  description,
  features = [],
  primaryAction,
  secondaryAction,
  trustSignals = [],
  image,
  className = '',
  ...props 
}, ref) => {

  return (
    <div ref={ref} className={`relative bg-white overflow-hidden ${className}`} {...props}>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* SVG Diagonal Design Element */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              
              {/* Optional Badge */}
              {badge && (
                <div className="mb-6">
                  <Badge 
                    variant={badge.variant || 'primary'} 
                    className={`w-fit ${badge.className || ''}`}
                  >
                    {badge.text}
                  </Badge>
                </div>
              )}

              {/* Main Title */}
              <h1 className="text-4xl tracking-tight font-heading font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
                {typeof title === 'string' ? (
                  title
                ) : (
                  <>
                    <span className="block xl:inline">{title.main}</span>
                    {title.highlight && (
                      <span className="block text-primary-600 xl:inline"> {title.highlight}</span>
                    )}
                  </>
                )}
              </h1>

              {/* Subtitle */}
              {subtitle && (
                <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl tracking-tight font-heading font-semibold text-gray-700 leading-snug">
                  {subtitle}
                </h2>
              )}

              {/* Description */}
              {description && (
                <p className="mt-4 text-base text-gray-600 sm:mt-6 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0 leading-relaxed font-normal">
                  {description}
                </p>
              )}

              {/* Features List */}
              {features.length > 0 && (
                <div className="mt-8 space-y-3 text-sm text-gray-600 sm:text-base lg:mx-0">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Icon 
                        name="check" 
                        className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" 
                      />
                      <span className="font-medium">
                        {typeof feature === 'string' ? feature : (
                          <>
                            {feature.text}
                            {feature.highlight && (
                              <strong className="font-semibold text-gray-800"> {feature.highlight}</strong>
                            )}
                          </>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              {(primaryAction || secondaryAction) && (
                <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                  {primaryAction && (
                    <Button
                      size="lg"
                      onClick={primaryAction.onClick}
                      className={`font-semibold ${primaryAction.className || ''}`}
                    >
                      {primaryAction.icon && (
                        <Icon name={primaryAction.icon} size="sm" className="mr-2" />
                      )}
                      {primaryAction.text}
                    </Button>
                  )}
                  {secondaryAction && (
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={secondaryAction.onClick}
                      className={`font-medium ${secondaryAction.className || ''}`}
                    >
                      {secondaryAction.icon && (
                        <Icon name={secondaryAction.icon} size="sm" className="mr-2" />
                      )}
                      {secondaryAction.text}
                    </Button>
                  )}
                </div>
              )}

              {/* Trust Signals */}
              {trustSignals.length > 0 && (
                <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-gray-500 lg:justify-start sm:justify-center">
                  {trustSignals.map((signal, index) => (
                    <div key={index} className="flex items-center">
                      {signal.rating && (
                        <>
                          <span className="font-bold text-primary-600 text-2xl mr-2">
                            {signal.rating}
                          </span>
                          <div className="flex text-yellow-400 mr-2">
                            {'★'.repeat(5)}
                          </div>
                          <span className="font-medium">{signal.text}</span>
                        </>
                      )}
                      {signal.number && (
                        <>
                          {index > 0 && <div className="border-l border-gray-300 pl-8" />}
                          <span className="font-bold text-gray-800">{signal.number}</span>
                          <span className="font-medium ml-1">{signal.text}</span>
                        </>
                      )}
                      {signal.certification && (
                        <>
                          {index > 0 && <div className="border-l border-gray-300 pl-8" />}
                          <span className="font-bold text-gray-800">{signal.certification}</span>
                          <span className="font-medium ml-1">{signal.text}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
      
      {/* Right Side Image/Content */}
      {image && (
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
            
            {/* Background Image */}
            {image.src && (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${image.src}')`
                }}
                role="img"
                aria-label={image.alt || 'Hero image'}
              />
            )}

            {/* Overlay */}
            {image.overlay && (
              <div className={`absolute inset-0 ${image.overlay}`} />
            )}

            {/* Content Overlay */}
            {image.content && (
              <div className="absolute inset-0 flex items-end justify-center p-8">
                <div className="text-white text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-sm font-medium mb-1">{image.content.title}</div>
                  <div className="text-xs opacity-90">{image.content.subtitle}</div>
                </div>
              </div>
            )}

            {/* Gradient for better text contrast */}
            {!image.overlay && (
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent lg:from-white/40"></div>
            )}
          </div>
        </div>
      )}
    </div>
  )
})

ModernHero.displayName = 'ModernHero'

export default ModernHero 