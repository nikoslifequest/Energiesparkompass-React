import { forwardRef } from 'react'
import { Button, Badge, Icon } from './index'

// Helper component to safely render HTML content
const HTMLContent = ({ content, className = "", as: Element = "div", ...props }) => {
  if (!content) return null
  
  return (
    <Element 
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
      {...props}
    />
  )
}

const SimpleHero = forwardRef(({ 
  badge,
  title,
  subtitle,
  description,
  features = [],
  primaryAction,
  secondaryAction,
  image,
  centered = false,
  className = '',
  ...props 
}, ref) => {

  return (
    <div ref={ref} className={`relative bg-white overflow-hidden ${className}`} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`py-16 sm:py-20 md:py-24 lg:py-28 ${image ? 'lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center' : ''}`}>
          
          {/* Content Section */}
          <div className={`${centered ? 'text-center' : 'sm:text-center lg:text-left'}`}>
            
            {/* Optional Badge */}
            {badge && (
              <div className={`mb-6 ${centered ? 'flex justify-center' : ''}`}>
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
                  <span className="block">{title.main}</span>
                  {title.highlight && (
                    <span className="block text-primary-600 mt-2">{title.highlight}</span>
                  )}
                </>
              )}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl tracking-tight font-heading font-semibold text-gray-700 leading-snug">
                {subtitle}
              </h2>
            )}

            {/* Description */}
            {description && (
              <HTMLContent 
                content={description}
                as="p"
                className={`mt-6 text-base text-gray-600 sm:text-lg md:text-xl leading-relaxed font-normal ${
                  centered ? 'max-w-3xl mx-auto' : 'sm:max-w-xl sm:mx-auto lg:mx-0'
                }`}
              />
            )}

            {/* Features List */}
            {features.length > 0 && (
              <div className={`mt-8 space-y-3 text-sm text-gray-600 sm:text-base ${
                centered ? 'max-w-2xl mx-auto' : 'lg:mx-0'
              }`}>
                {features.map((feature, index) => (
                  <div key={index} className={`flex items-start ${centered ? 'justify-center' : ''}`}>
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
              <div className={`mt-10 ${
                centered 
                  ? 'flex flex-col sm:flex-row gap-4 justify-center' 
                  : 'sm:flex sm:justify-center lg:justify-start gap-4'
              }`}>
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
          </div>

          {/* Image Section */}
          {image && (
            <div className="mt-12 lg:mt-0">
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
                
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
                  <div className="absolute inset-0 flex items-end justify-center p-6">
                    <div className="text-white text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="text-sm font-medium mb-1">{image.content.title}</div>
                      <div className="text-xs opacity-90">{image.content.subtitle}</div>
                    </div>
                  </div>
                )}

                {/* Default gradient for better contrast */}
                {!image.overlay && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
})

SimpleHero.displayName = 'SimpleHero'

export default SimpleHero 